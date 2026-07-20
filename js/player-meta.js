/**
 * Player country flags, profile backgrounds, display helpers.
 * Флаги стран игроков, фоны профилей и хелперы отображения.
 */
(function (global) {
  'use strict';

  /** Default RU; exceptions only. */
  const COUNTRY_BY_PLAYER = {
    EmperorPenguin01: 'nl',
    Bahahanchiklkm: 'kz',
    REPUNZEL2882: 'kz',
  };

  const FLAG_SVG = {
    ru: '<svg viewBox="0 0 9 6" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect width="9" height="6" fill="#fff"/><rect y="2" width="9" height="2" fill="#0039a6"/><rect y="4" width="9" height="2" fill="#d52b1e"/></svg>',
    nl: '<svg viewBox="0 0 9 6" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect width="9" height="2" fill="#ae1c28"/><rect y="2" width="9" height="2" fill="#fff"/><rect y="4" width="9" height="2" fill="#21468b"/></svg>',
    kz: '<svg viewBox="0 0 12 6" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect width="12" height="6" fill="#00afca"/><circle cx="6" cy="3" r="1.35" fill="#fec50c"/><path fill="#fec50c" d="M1.2 1.1h.35v3.8H1.2zm.55.4c.7.35 1.15 1.1 1.15 1.9s-.45 1.55-1.15 1.9V1.5z"/></svg>',
  };

  const COUNTRY_LABEL = {
    ru: { ru: 'Россия', en: 'Russia' },
    nl: { ru: 'Нидерланды', en: 'Netherlands' },
    kz: { ru: 'Казахстан', en: 'Kazakhstan' },
  };

  const BG_PALETTES = [
    ['#1a1428', '#3d2a14', '#0f1a2e'],
    ['#14201c', '#2a3d18', '#1a2830'],
    ['#201418', '#3d1828', '#141828'],
    ['#181828', '#243048', '#2a2030'],
    ['#1c1810', '#384018', '#201828'],
    ['#101820', '#182838', '#283018'],
  ];

  function countryCodeFor(name) {
    const key = String(name || '').trim();
    return COUNTRY_BY_PLAYER[key] || 'ru';
  }

  function flagHtml(name, opts) {
    const code = countryCodeFor(name);
    const svg = FLAG_SVG[code] || FLAG_SVG.ru;
    const lang = (opts && opts.lang) || 'ru';
    const label = (COUNTRY_LABEL[code] && COUNTRY_LABEL[code][lang]) || code.toUpperCase();
    const title = (opts && opts.title) || label;
    return `<span class="player-flag" title="${title}" data-country="${code}">${svg}</span>`;
  }

  function hashName(name) {
    let h = 0;
    const s = String(name || '');
    for (let i = 0; i < s.length; i += 1) h = ((h << 5) - h + s.charCodeAt(i)) | 0;
    return Math.abs(h);
  }

  /**
   * Deterministic CSS background for a player profile card.
   * Детерминированный CSS-фон карточки профиля.
   */
  function profileBackgroundStyle(name) {
    const h = hashName(name);
    const pal = BG_PALETTES[h % BG_PALETTES.length];
    const angle = 120 + (h % 60);
    const x = 20 + (h % 50);
    const y = 15 + ((h >> 3) % 55);
    return `background-image:
      radial-gradient(ellipse 70% 55% at ${x}% ${y}%, ${pal[1]}aa 0%, transparent 55%),
      radial-gradient(ellipse 50% 40% at ${100 - x}% ${100 - y}%, ${pal[2]}99 0%, transparent 50%),
      linear-gradient(${angle}deg, ${pal[0]}, #0c0c14 70%);`;
  }

  /**
   * Normalize map type key for preview assets.
   * Нормализует тип карты для превью.
   */
  function mapPreviewKey(raw) {
    const s = String(raw || '').trim().toLowerCase();
    if (!s) return 'unknown';
    if (s.includes('fractal') || s.includes('фрактал')) return 'fractal';
    if (s.includes('pangaea') || s.includes('панге')) return 'pangaea';
    if (s.includes('perlin') || s.includes('перлин') || s.includes('шум')) return 'perlin';
    if (s.includes('inner') || s.includes('внутренн')) return 'inner_sea';
    if (s.includes('archipel') || s.includes('архипелаг')) return 'archipelago';
    if (s.includes('continents') || s.includes('континент')) return 'continents';
    if (s.includes('island') || s.includes('остров')) return 'islands';
    return 'unknown';
  }

  function mapPreviewHtml(raw) {
    const key = mapPreviewKey(raw);
    return `<img class="map-preview" src="img/maps/${key}.svg" alt="" width="48" height="48" loading="lazy">`;
  }

  global.IronLeaguePlayerMeta = {
    COUNTRY_BY_PLAYER,
    countryCodeFor,
    flagHtml,
    profileBackgroundStyle,
    mapPreviewKey,
    mapPreviewHtml,
  };
})(typeof window !== 'undefined' ? window : globalThis);
