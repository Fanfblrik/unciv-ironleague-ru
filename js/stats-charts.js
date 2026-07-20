/**
 * Bar and pie charts for Iron League stats (switchable views).
 * Столбчатые и круговые диаграммы статистики (переключаемые виды).
 */
(function (global) {
  'use strict';

  const COLORS = [
    '#ffd700', '#5b8def', '#3d8a4a', '#e07a5f', '#9b5de5',
    '#00bbf9', '#f15bb5', '#fee440', '#00f5d4', '#9b2226',
    '#adb5bd', '#ff922b',
  ];

  function prepareList(rows, opts) {
    const options = opts || {};
    const maxBars = options.maxBars || 16;
    const valueKey = options.valueKey || 'value';
    const labelKey = options.labelKey || 'label';
    return (rows || [])
      .slice()
      .sort((a, b) => Number(b[valueKey] || 0) - Number(a[valueKey] || 0))
      .filter((r) => Number(r[valueKey] || 0) > 0)
      .slice(0, maxBars)
      .map((r) => ({
        label: String(r[labelKey] || ''),
        value: Number(r[valueKey] || 0),
      }));
  }

  function renderBarChart(container, rows, opts) {
    if (!container) return;
    const options = opts || {};
    const list = prepareList(rows, options);
    if (!list.length) {
      container.innerHTML = `<p class="hint">${options.emptyText || '—'}</p>`;
      return;
    }
    const max = Math.max(...list.map((r) => r.value), 1);
    container.innerHTML = `<div class="il-bar-chart" role="img" aria-label="${options.aria || ''}">${
      list.map((r) => {
        const pct = Math.max(2, Math.round((r.value / max) * 100));
        return `<div class="il-bar-row">
          <div class="il-bar-label" title="${r.label}">${r.label}</div>
          <div class="il-bar-track"><div class="il-bar-fill" style="width:${pct}%"></div></div>
          <div class="il-bar-value">${r.value}</div>
        </div>`;
      }).join('')
    }</div>`;
  }

  function polar(cx, cy, r, angleDeg) {
    const a = ((angleDeg - 90) * Math.PI) / 180;
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  }

  function renderPieChart(container, rows, opts) {
    if (!container) return;
    const options = opts || {};
    const list = prepareList(rows, options);
    if (!list.length) {
      container.innerHTML = `<p class="hint">${options.emptyText || '—'}</p>`;
      return;
    }
    const total = list.reduce((s, r) => s + r.value, 0) || 1;
    const cx = 80;
    const cy = 80;
    const R = 70;
    let angle = 0;
    const slices = [];
    list.forEach((r, i) => {
      const sweep = (r.value / total) * 360;
      const start = angle;
      const end = angle + sweep;
      angle = end;
      const large = sweep > 180 ? 1 : 0;
      const [x1, y1] = polar(cx, cy, R, start);
      const [x2, y2] = polar(cx, cy, R, end);
      const color = COLORS[i % COLORS.length];
      const d = sweep >= 359.9
        ? `M ${cx} ${cy - R} A ${R} ${R} 0 1 1 ${cx - 0.01} ${cy - R} Z`
        : `M ${cx} ${cy} L ${x1} ${y1} A ${R} ${R} 0 ${large} 1 ${x2} ${y2} Z`;
      slices.push(`<path d="${d}" fill="${color}" stroke="#0c0c14" stroke-width="1.5">
        <title>${r.label}: ${r.value}</title></path>`);
    });
    const legend = list.map((r, i) => {
      const pct = Math.round((r.value / total) * 1000) / 10;
      return `<div class="il-pie-legend-row">
        <span class="il-pie-swatch" style="background:${COLORS[i % COLORS.length]}"></span>
        <span class="il-pie-legend-label" title="${r.label}">${r.label}</span>
        <span class="il-pie-legend-value">${r.value} (${pct}%)</span>
      </div>`;
    }).join('');
    container.innerHTML = `<div class="il-pie-wrap" role="img" aria-label="${options.aria || ''}">
      <svg class="il-pie-svg" viewBox="0 0 160 160" width="180" height="180">${slices.join('')}</svg>
      <div class="il-pie-legend">${legend}</div>
    </div>`;
  }

  /**
   * Mount chart with bar/pie toggle; persists mode in localStorage.
   * Монтирует диаграмму с переключателем bar/pie.
   */
  function renderChartWithToggle(container, rows, opts) {
    if (!container) return;
    const options = opts || {};
    const storageKey = options.storageKey || 'il_chart_mode_default';
    let mode = 'pie';
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved === 'bar' || saved === 'pie') mode = saved;
    } catch (e) { /* ignore */ }

    const shell = document.createElement('div');
    shell.className = 'il-chart-shell';
    shell.innerHTML = `<div class="il-chart-toolbar" role="group">
      <button type="button" class="il-chart-mode-btn" data-mode="pie">${options.pieLabel || 'Pie'}</button>
      <button type="button" class="il-chart-mode-btn" data-mode="bar">${options.barLabel || 'Bars'}</button>
    </div>
    <div class="il-chart-body"></div>`;
    container.innerHTML = '';
    container.appendChild(shell);
    const body = shell.querySelector('.il-chart-body');
    const paint = () => {
      shell.querySelectorAll('.il-chart-mode-btn').forEach((btn) => {
        btn.classList.toggle('active', btn.dataset.mode === mode);
      });
      if (mode === 'bar') renderBarChart(body, rows, options);
      else renderPieChart(body, rows, options);
    };
    shell.querySelectorAll('.il-chart-mode-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        mode = btn.dataset.mode;
        try { localStorage.setItem(storageKey, mode); } catch (e) { /* ignore */ }
        paint();
      });
    });
    paint();
  }

  global.IronLeagueCharts = {
    renderBarChart,
    renderPieChart,
    renderChartWithToggle,
  };
})(typeof window !== 'undefined' ? window : globalThis);
