/**
 * Lazy GIF tail preview (last ~seconds) via ImageDecoder when available.
 * Превью хвоста GIF (последние ~секунды) через ImageDecoder, если доступен.
 */
(function (global) {
  'use strict';

  const DEFAULT_TAIL_MS = 2800;
  const MAX_TAIL_FRAMES = 48;
  const cache = new Map();

  function supportsImageDecoder() {
    return typeof ImageDecoder !== 'undefined';
  }

  /**
   * Decode last frames of an animated GIF.
   * Декодирует последние кадры анимированного GIF.
   *
   * @param {string} url
   * @param {number} [tailMs]
   * @returns {Promise<{frames: {bitmap: ImageBitmap, delayMs: number}[], width: number, height: number}|null>}
   */
  async function loadTail(url, tailMs) {
    const key = String(url || '');
    if (!key) return null;
    if (cache.has(key)) return cache.get(key);
    if (!supportsImageDecoder()) return null;

    const res = await fetch(key, { cache: 'force-cache' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.arrayBuffer();
    const decoder = new ImageDecoder({ data, type: 'image/gif' });
    await decoder.tracks.ready;
    const track = decoder.tracks.selectedTrack;
    if (!track || !track.frameCount) {
      decoder.close();
      return null;
    }

    const n = track.frameCount;
    const start = Math.max(0, n - MAX_TAIL_FRAMES);
    const raw = [];
    for (let i = start; i < n; i += 1) {
      const result = await decoder.decode({ frameIndex: i });
      const delayMs = Math.max(40, Math.round((result.duration || 100000) / 1000));
      const bitmap = await createImageBitmap(result.image);
      result.image.close();
      raw.push({ bitmap, delayMs });
    }
    decoder.close();

    const budget = Number.isFinite(tailMs) ? Math.max(800, tailMs) : DEFAULT_TAIL_MS;
    let sum = 0;
    const frames = [];
    for (let i = raw.length - 1; i >= 0; i -= 1) {
      frames.unshift(raw[i]);
      sum += raw[i].delayMs;
      if (sum >= budget) break;
    }
    for (const f of raw) {
      if (!frames.includes(f)) f.bitmap.close();
    }

    const width = frames[0].bitmap.width;
    const height = frames[0].bitmap.height;
    const pack = { frames, width, height };
    cache.set(key, pack);
    return pack;
  }

  /**
   * Play decoded frames on a canvas (loop).
   * Проигрывает кадры на canvas по кругу.
   *
   * @param {HTMLCanvasElement} canvas
   * @param {{frames: {bitmap: ImageBitmap, delayMs: number}[], width: number, height: number}} pack
   * @returns {() => void} stop
   */
  function playOnCanvas(canvas, pack) {
    const ctx = canvas.getContext('2d');
    if (!ctx || !pack || !pack.frames.length) return () => {};
    canvas.width = pack.width;
    canvas.height = pack.height;
    let idx = 0;
    let timer = 0;
    let stopped = false;

    function draw() {
      if (stopped) return;
      const frame = pack.frames[idx];
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(frame.bitmap, 0, 0);
      const delay = frame.delayMs;
      idx = (idx + 1) % pack.frames.length;
      timer = window.setTimeout(draw, delay);
    }
    draw();
    return () => {
      stopped = true;
      window.clearTimeout(timer);
    };
  }

  /**
   * Mount lazy GIF tail previews under a root.
   * Вешает ленивые превью хвоста GIF внутри root.
   *
   * @param {ParentNode} root
   * @param {{tailMs?: number, t?: (k: string) => string}} [opts]
   */
  function mount(root, opts) {
    const tailMs = (opts && opts.tailMs) || DEFAULT_TAIL_MS;
    const nodes = root.querySelectorAll('[data-gif-preview]');
    if (!nodes.length) return;

    const run = async (el) => {
      if (el.dataset.previewState) return;
      el.dataset.previewState = 'loading';
      const url = el.getAttribute('data-gif-preview');
      const canvas = el.querySelector('canvas.replay-preview-canvas');
      const fallback = el.querySelector('.replay-preview-fallback');
      const badge = el.querySelector('.replay-preview-badge');
      if (!url || !canvas) return;

      try {
        const pack = await loadTail(url, tailMs);
        if (!pack) throw new Error('no decoder');
        el._previewStop = playOnCanvas(canvas, pack);
        canvas.hidden = false;
        if (fallback) fallback.hidden = true;
        if (badge) badge.hidden = false;
        el.dataset.previewState = 'ready';
        el.dataset.previewMode = 'tail';
      } catch (e) {
        canvas.hidden = true;
        if (fallback) {
          fallback.hidden = false;
          if (!fallback.getAttribute('src')) fallback.setAttribute('src', url);
        }
        if (badge) badge.hidden = true;
        el.dataset.previewState = 'fallback';
        el.dataset.previewMode = 'full';
      }
    };

    if (!('IntersectionObserver' in window)) {
      nodes.forEach((el) => { run(el); });
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        io.unobserve(el);
        run(el);
      });
    }, { rootMargin: '120px 0px', threshold: 0.05 });

    nodes.forEach((el) => io.observe(el));
  }

  global.IronLeagueGifPreview = {
    mount,
    supportsImageDecoder,
    loadTail,
  };
})(typeof window !== 'undefined' ? window : globalThis);
