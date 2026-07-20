/**
 * Simple horizontal bar charts for Iron League stats.
 * Простые горизонтальные диаграммы для статистики Iron League.
 */
(function (global) {
  'use strict';

  function renderBarChart(container, rows, opts) {
    if (!container) return;
    const options = opts || {};
    const maxBars = options.maxBars || 16;
    const valueKey = options.valueKey || 'value';
    const labelKey = options.labelKey || 'label';
    const list = (rows || [])
      .slice()
      .sort((a, b) => Number(b[valueKey] || 0) - Number(a[valueKey] || 0))
      .filter((r) => Number(r[valueKey] || 0) > 0)
      .slice(0, maxBars);

    if (!list.length) {
      container.innerHTML = `<p class="hint">${options.emptyText || '—'}</p>`;
      return;
    }

    const max = Math.max(...list.map((r) => Number(r[valueKey] || 0)), 1);
    container.innerHTML = `<div class="il-bar-chart" role="img" aria-label="${options.aria || ''}">${
      list.map((r) => {
        const v = Number(r[valueKey] || 0);
        const pct = Math.max(2, Math.round((v / max) * 100));
        const label = String(r[labelKey] || '');
        return `<div class="il-bar-row">
          <div class="il-bar-label" title="${label}">${label}</div>
          <div class="il-bar-track"><div class="il-bar-fill" style="width:${pct}%"></div></div>
          <div class="il-bar-value">${v}</div>
        </div>`;
      }).join('')
    }</div>`;
  }

  global.IronLeagueCharts = { renderBarChart };
})(typeof window !== 'undefined' ? window : globalThis);
