/**
 * RU/EN UI strings for Iron League site.
 * Civ terminology kept in English where Unciv uses it (Piety, Tradition, …).
 */
(function (global) {
  'use strict';

  const STORAGE_KEY = 'ironleague_lang';

  const POLICY_EN = {
    'Традиция': 'Tradition',
    'Вольность': 'Liberty',
    'Честь': 'Honor',
    'Благочестие': 'Piety',
    'Набожность': 'Piety',
    'Заступничество': 'Patronage',
    'Эстетика': 'Aesthetics',
    'Коммерция': 'Commerce',
    'Исследование': 'Exploration',
    'Рационализм': 'Rationalism',
    'Свобода': 'Freedom',
    'Порядок': 'Order',
    'Самодержавие': 'Autocracy',
  };

  const I18N = {
    ru: {
      'nav.archive': 'Архив игр',
      'nav.stats': 'Статистика',
      'nav.rating': 'Рейтинг',
      'nav.tierlist': 'Тирлист',
      'nav.faq': 'FAQ',
      'title.archive': '⚔️ Архив игр 🛡️',
      'title.stats': '📊 Статистика лиги',
      'title.rating': '🏅 Рейтинг игроков',
      'title.tierlist': '⭐ Тирлист наций',
      'title.faq': '❓ FAQ',
      'footer.archive': 'Данные обновляются автоматически',
      'footer.stats': 'Статистика по играм архива (без teams/scrap)',
      'footer.rating': 'Рейтинг пересчитывается при каждой загрузке архива',
      'footer.tierlist': 'Тирлист наций лиги',
      'footer.faq': 'Частые вопросы',
      'filter.nation': 'Фильтр по нации',
      'filter.nationAll': 'Все нации',
      'filter.player': 'Поиск по игроку',
      'filter.playerPh': 'Введите никнейм...',
      'filter.sort': 'Сортировка',
      'filter.newest': 'Сначала новые',
      'filter.oldest': 'Сначала старые',
      'filter.relevance': 'Неактуальные игры',
      'filter.relevanceAll': 'Все игры',
      'filter.relevanceHide': 'Скрыть teams/scrap',
      'filter.relevanceOnly': 'Только teams/scrap',
      'stat.games': 'Всего игр',
      'stat.nations': 'Наций',
      'stat.players': 'Игроков',
      'badge.teams': 'Командная',
      'badge.scrap': 'Скрап',
      'badge.excluded': 'Не в стате/рейтинге',
      'card.expand': '⛶ На весь экран',
      'card.roster': 'Состав',
      'card.finale': 'Финал',
      'card.replay': '🎬 Смотреть реплей',
      'card.hideReplay': '🎬 Скрыть реплей',
      'card.winner': '🏆 ПОБЕДИТЕЛЬ:',
      'replay.hint': 'Кликните по гифке, чтобы переиграть',
      'replay.title': 'Кликните, чтобы переиграть',
      'stats.intro':
        'В статистику не входят игры с пометками «командная» (teams) и «скрап» (scrap): они остаются в архиве и показываются с бейджем, но не влияют на винрейт, средние и рейтинг. Фильтр архива позволяет скрыть или показать только такие игры.',
      'stats.winrate': 'Винрейт игроков',
      'stats.winrateHint': 'Победы / участия только в актуальных играх (без teams/scrap). Минимум 1 игра.',
      'stats.nations': 'Нации: пики и винрейт',
      'stats.nationsHint': 'Все нации мода. Не пикнутые — 0 пиков и 0% винрейта. Только актуальные игры.',
      'stats.detail': 'Игроки: нации и финал',
      'stats.detailHint': 'Кого брали чаще, чудеса и захваченные столицы (по «Финал», без teams/scrap).',
      'stats.averages': 'Игроки: средние показатели',
      'stats.averagesHint': 'Средние по финалу (survivors) только по актуальным играм. Топ‑3 первых институтов — по первому открытому институту.',
      'rating.intro':
        'Рейтинг считается на клиенте из Games.json при каждой загрузке страницы (добавление/удаление игры в архиве автоматически меняет таблицы). Учитываются только актуальные FFA-игры без флагов teams/scrap. Места в игре: победитель первый, далее живые по очкам, затем выбывшие.',
      'rating.combined': 'Сводный рейтинг',
      'rating.combinedHint':
        'Среднее арифметическое трёх рейтингов ниже. Также показано среднее место в трёх таблицах (меньше — лучше).',
      'rating.ffa': 'Elo FFA (линейное место)',
      'rating.ffaHint':
        'Как в Google Sheet ratingv2: старт 1000, K=32. Actual — место от 1 (первое) до 0 (последнее). Expected — среднее Elo-ожидание против каждого соперника. ΔR = K × (Actual − Expected).',
      'rating.pairwise': 'Elo pairwise',
      'rating.pairwiseHint':
        'Старт 1000, суммарный K=32 на игру. Каждый вышестоящий «побеждает» каждого ниже; K делится на число пар. Классический FFA-Elo с нулевой суммой попарно.',
      'rating.finish': 'Рейтинг по финишу',
      'rating.finishHint':
        'Средний скор места (1…0) по всем играм переводится в шкалу около 1000 (±200 за стабильно первое/последнее). Больше игр — ближе к долгосрочному среднему.',
      'rating.col.place': '#',
      'rating.col.player': 'Игрок',
      'rating.col.rating': 'Рейтинг',
      'rating.col.games': 'Игр',
      'rating.col.avgPlace': 'Ср. место',
      'rating.col.pFfa': 'Место FFA',
      'rating.col.pPair': 'Место pair',
      'rating.col.pFin': 'Место finish',
      'force.label': 'Сила (кол-во юнитов\\мощь)',
      'backTop': 'Наверх',
      'lang.label': 'Язык',
    },
    en: {
      'nav.archive': 'Archive',
      'nav.stats': 'Statistics',
      'nav.rating': 'Rating',
      'nav.tierlist': 'Tier list',
      'nav.faq': 'FAQ',
      'title.archive': '⚔️ Game archive 🛡️',
      'title.stats': '📊 League statistics',
      'title.rating': '🏅 Player ratings',
      'title.tierlist': '⭐ Nation tier list',
      'title.faq': '❓ FAQ',
      'footer.archive': 'Data updates automatically',
      'footer.stats': 'Stats from archive games (excluding teams/scrap)',
      'footer.rating': 'Ratings recalculate on every archive load',
      'footer.tierlist': 'League nation tier list',
      'footer.faq': 'Frequently asked questions',
      'filter.nation': 'Filter by nation',
      'filter.nationAll': 'All nations',
      'filter.player': 'Search player',
      'filter.playerPh': 'Enter nickname...',
      'filter.sort': 'Sort',
      'filter.newest': 'Newest first',
      'filter.oldest': 'Oldest first',
      'filter.relevance': 'Non-ranked games',
      'filter.relevanceAll': 'All games',
      'filter.relevanceHide': 'Hide teams/scrap',
      'filter.relevanceOnly': 'Only teams/scrap',
      'stat.games': 'Games',
      'stat.nations': 'Nations',
      'stat.players': 'Players',
      'badge.teams': 'Teams',
      'badge.scrap': 'Scrap',
      'badge.excluded': 'Excluded from stats/rating',
      'card.expand': '⛶ Fullscreen',
      'card.roster': 'Roster',
      'card.finale': 'Finale',
      'card.replay': '🎬 Watch replay',
      'card.hideReplay': '🎬 Hide replay',
      'card.winner': '🏆 WINNER:',
      'replay.hint': 'Click the GIF to replay',
      'replay.title': 'Click to replay',
      'stats.intro':
        'Statistics exclude games tagged teams or scrap: they stay in the archive with a badge, but do not affect winrates, averages, or ratings. Use the archive filter to hide or show only those games.',
      'stats.winrate': 'Player winrate',
      'stats.winrateHint': 'Wins / games in ranked archive only (no teams/scrap). Minimum 1 game.',
      'stats.nations': 'Nations: picks and winrate',
      'stats.nationsHint': 'All mod nations. Unpicked show 0 picks and 0% winrate. Ranked games only.',
      'stats.detail': 'Players: nations and finale',
      'stats.detailHint': 'Most-picked nations, wonders and captured capitals (Finale tab; no teams/scrap).',
      'stats.averages': 'Players: averages',
      'stats.averagesHint': 'Finale averages (survivors) for ranked games only. Top-3 opener policies from first unlocked policy branch.',
      'rating.intro':
        'Ratings are computed in the browser from Games.json on every page load (adding/removing a game in the archive updates the tables). Only ranked FFA games without teams/scrap flags count. Placement: winner first, then living players by score, then eliminated.',
      'rating.combined': 'Combined rating',
      'rating.combinedHint':
        'Arithmetic mean of the three ratings below. Also shows average place across the three tables (lower is better).',
      'rating.ffa': 'FFA Elo (linear place)',
      'rating.ffaHint':
        'As in Google Sheet ratingv2: start 1000, K=32. Actual is place from 1 (first) to 0 (last). Expected is the average Elo expectancy vs each opponent. ΔR = K × (Actual − Expected).',
      'rating.pairwise': 'Pairwise Elo',
      'rating.pairwiseHint':
        'Start 1000, total K=32 per game. Each higher place “beats” each lower; K is split across pairs. Classic zero-sum FFA Elo.',
      'rating.finish': 'Finish-place rating',
      'rating.finishHint':
        'Average place score (1…0) across games maps to a ~1000 scale (±200 for always-first / always-last). More games pull toward the long-run average.',
      'rating.col.place': '#',
      'rating.col.player': 'Player',
      'rating.col.rating': 'Rating',
      'rating.col.games': 'Games',
      'rating.col.avgPlace': 'Avg place',
      'rating.col.pFfa': 'FFA place',
      'rating.col.pPair': 'Pair place',
      'rating.col.pFin': 'Finish place',
      'force.label': 'Strength (units\\power)',
      'backTop': 'Top',
      'lang.label': 'Language',
    },
  };

  let lang = 'ru';

  function getLang() {
    return lang;
  }

  function t(key) {
    const pack = I18N[lang] || I18N.ru;
    return pack[key] || I18N.ru[key] || key;
  }

  function translatePolicy(name) {
    if (lang !== 'en') return name;
    return POLICY_EN[name] || name;
  }

  function setLang(next) {
    lang = next === 'en' ? 'en' : 'ru';
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) { /* ignore */ }
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (key) el.textContent = t(key);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (key) el.setAttribute('placeholder', t(key));
    });
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    if (typeof global.onIronLeagueLangChange === 'function') {
      global.onIronLeagueLangChange(lang);
    }
  }

  function initLang() {
    let saved = 'ru';
    try {
      saved = localStorage.getItem(STORAGE_KEY) || 'ru';
    } catch (e) { /* ignore */ }
    setLang(saved);
  }

  global.IronLeagueI18n = {
    t,
    getLang,
    setLang,
    initLang,
    translatePolicy,
    POLICY_EN,
  };
})(typeof window !== 'undefined' ? window : globalThis);
