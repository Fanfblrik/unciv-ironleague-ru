/**
 * RU/EN UI strings for Iron League site.
 * Civ terminology kept in English where Unciv uses it (Piety, Tradition, …).
 */
(function (global) {
  'use strict';

  const STORAGE_KEY = 'ironleague_lang';

  /** Russian in-game terms → English (policies, ideologies, eras). */
  const TERM_EN = {
    // Policy branches / openers
    'Традиция': 'Tradition',
    'Вольность': 'Liberty',
    'Воля': 'Liberty',
    'Честь': 'Honor',
    'Благочестие': 'Piety',
    'Набожность': 'Piety',
    'Заступничество': 'Patronage',
    'Меценатство': 'Patronage',
    'Эстетика': 'Aesthetics',
    'Коммерция': 'Commerce',
    'Исследование': 'Exploration',
    'Рационализм': 'Rationalism',
    'Свобода': 'Freedom',
    'Порядок': 'Order',
    'Самодержавие': 'Autocracy',
    'Автократия': 'Autocracy',
    // Religion status
    'Пантеон': 'Pantheon',
    'Усилена': 'Enhanced',
    'Усиленная': 'Enhanced',
    // Eras
    'Древность': 'Ancient',
    'Античность': 'Classical',
    'Средневековье': 'Medieval',
    'Возрождение': 'Renaissance',
    'Индустриальная': 'Industrial',
    'Современность': 'Modern',
    'Атомная': 'Atomic',
    'Информационная': 'Information',
    'Будущее': 'Future',
  };

  /** Spaceship buildings are stored in English in Games.json. */
  const SPACESHIP_RU = {
    'Apollo Program': 'Программа «Аполлон»',
    'SS Booster': 'Ускоритель КК',
    'SS Cockpit': 'Кабина КК',
    'SS Engine': 'Двигатель КК',
    'SS Stasis Chamber': 'Криокамера КК',
  };

  /** Map type labels (RU ↔ EN). */
  const MAP_EN = {
    'Пангея': 'Pangaea',
    'Внутреннее море': 'Inner Sea',
    'Шум Перлина': 'Perlin',
    'Шум перлина': 'Perlin',
    'Перлин': 'Perlin',
    'Фрактал': 'Fractal',
    'Архипелаги': 'Archipelago',
  };
  const MAP_RU = {
    Pangaea: 'Пангея',
    'Inner Sea': 'Внутреннее море',
    Perlin: 'Шум Перлина',
    Fractal: 'Фрактал',
    Archipelago: 'Архипелаги',
  };

  const I18N = {
    ru: {
      'nav.archive': 'Архив игр',
      'nav.stats': 'Статистика',
      'nav.rating': 'Рейтинг',
      'nav.tierlist': 'Тирлист',
      'nav.faq': 'FAQ',
      'nav.aria': 'Разделы сайта',
      'title.archive': '⚔️ Архив игр 🛡️',
      'title.stats': '📊 Статистика лиги',
      'title.rating': '🏅 Рейтинг игроков',
      'title.tierlist': '⭐ Тирлист наций',
      'title.faq': '❓ FAQ',
      'title.doc': 'Iron League — Архив и FAQ',
      'footer.archive': 'Данные обновляются автоматически',
      'footer.stats': 'Статистика по играм архива (без teams/scrap)',
      'footer.rating': 'Рейтинг пересчитывается при каждой загрузке архива',
      'footer.tierlist': 'Тирлист наций лиги',
      'footer.faq': 'Частые вопросы',
      'footer.default': '📁 Хранилище реплеев | Нажмите на кнопку «Смотреть реплей», чтобы загрузить GIF',
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
      'loading': 'Загрузка данных...',
      'loading.tierlist': 'Загрузка тирлиста...',
      'loading.faq': 'Загрузка FAQ...',
      'error.load': '❌ Ошибка загрузки данных. Проверьте консоль (F12)',
      'error.tierlist': 'Не удалось загрузить тирлист',
      'error.faq': '❌ Не удалось загрузить FAQ',
      'empty.games': '😢 Игр не найдено',
      'badge.teams': 'Командная',
      'badge.scrap': 'Скрап',
      'badge.excluded': 'Не в стате/рейтинге',
      'card.expand': '⛶ На весь экран',
      'card.roster': 'Состав',
      'card.finale': 'Финал',
      'card.finaleFull': 'Финал (полная статистика)',
      'card.replay': '🎬 Смотреть реплей',
      'card.hideReplay': '🎬 Скрыть реплей',
      'card.winner': '🏆 ПОБЕДИТЕЛЬ:',
      'card.versionUnknown': 'Версия не указана',
      'card.noFinale': 'Нет данных о финале (появится после синка из сейва)',
      'card.noFinaleShort': 'Нет данных о финале',
      'modal.close': 'Закрыть',
      'modal.finish': 'Финиш',
      'modal.turn': 'ход',
      'modal.replay': 'Реплей',
      'replay.hint': 'Кликните по гифке, чтобы переиграть',
      'replay.title': 'Кликните, чтобы переиграть',
      'status.winner': '👑 Победитель',
      'status.eliminated': '💀 Выбыл',
      'flag.noCapital': 'Нет столицы',
      'flag.capitalTaken': 'Столицу захватил: {who}',
      'flag.eliminatedUnknown': 'Выбыл (столица уничтожена или неизвестна)',
      'flag.ideologyNone': 'идеология не принята',
      'captured.title': 'Захваченные столицы:',
      'wonders.title': 'Чудеса:',
      'wonders.none': 'Чудес нет',
      'stat.score': 'Очки',
      'stat.science': 'Наука',
      'stat.cities': 'Города',
      'stat.population': 'Население',
      'stat.techs': 'Технологии',
      'stat.policies': 'Институты',
      'stat.policyBranches': 'Ветки',
      'stat.spaceship': 'Корабль',
      'stat.firstPolicy': 'Первый институт',
      'stat.era': 'Эра',
      'stat.religion': 'Религия',
      'stat.ideology': 'Идеология',
      'stat.ideologyTurn': 'Ход идеологии',
      'stat.elimTurn': 'Ход выбывания',
      'stat.capitalLostTurn': 'Ход потери столицы',
      'stat.wars': 'Войны (объявлено / получено)',
      'stat.atWar': 'В войне с',
      'val.unknown': 'неизвестно',
      'val.notEliminated': 'не выбыл',
      'val.neverLostCapital': 'не терял',
      'val.ideologyNotAdopted': 'не принята',
      'cc.line': 'СС: {nation} (ход {turn})',
      'cc.for': 'за',
      'cc.against': 'против',
      'cc.abstain': 'воздержались',
      'league.draft': 'Драфт (выборы): {list}',
      'league.bans': 'Баны: {list}',
      'victory.science': 'Научная победа',
      'victory.culture': 'Культурная победа',
      'victory.domination': 'Военная победа',
      'victory.diplomatic': 'Дипломатическая победа',
      'victory.time': 'Победа по времени',
      'victory.cc': 'Досрочное окончание (СС)',
      'stats.toc': 'Разделы статистики',
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
      'stats.col.player': 'Игрок',
      'stats.col.games': 'Игр',
      'stats.col.wins': 'Побед',
      'stats.col.winrate': 'Винрейт',
      'stats.col.capitalLosses': 'Потерь столицы',
      'stats.col.eliminated': 'Выбываний',
      'stats.col.nation': 'Нация',
      'stats.col.picks': 'Пиков',
      'stats.col.topNation': 'Чаще всего',
      'stats.col.uniqueNations': 'Уник. наций',
      'stats.col.wonders': 'Чудес (сумма)',
      'stats.col.conquered': 'Столиц захвачено',
      'stats.col.gamesWithStats': 'Игр со статой',
      'stats.col.score': 'Очки',
      'stats.col.units': 'Юниты',
      'stats.col.strength': 'Сила',
      'stats.col.science': 'Наука',
      'stats.col.cities': 'Города',
      'stats.col.population': 'Население',
      'stats.col.techs': 'Технологии',
      'stats.col.topPolicies': 'Топ‑3 института',
      'rating.intro':
        'Рейтинг считается на клиенте из Games.json при каждой загрузке страницы (добавление/удаление игры в архиве автоматически меняет таблицы). Учитываются только актуальные FFA-игры без флагов teams/scrap. Места в игре: победитель первый, далее живые по очкам, затем выбывшие.',
      'rating.toc': 'Разделы рейтинга',
      'rating.combined': 'Сводный рейтинг',
      'rating.combinedHint':
        'Среднее арифметическое трёх рейтингов ниже. Также показано среднее место в трёх таблицах (меньше — лучше).',
      'rating.ffa': 'Elo FFA (линейное место)',
      'rating.ffaHint':
        'Как в Google Sheet ratingv2: старт 1000, K настраивается ниже. Actual — место от 1 (первое) до 0 (последнее). Expected — среднее Elo-ожидание против каждого соперника. ΔR = K × (Actual − Expected).',
      'rating.pairwise': 'Elo pairwise',
      'rating.pairwiseHint':
        'Старт 1000, суммарный K на игру (см. переключатель). Каждый вышестоящий «побеждает» каждого ниже; K делится на число пар. Классический FFA-Elo с нулевой суммой попарно.',
      'rating.kLabel': 'Коэффициент K',
      'rating.kHint': 'Влияет на Elo FFA и pairwise (не на рейтинг по финишу). По умолчанию 24.',
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
      'tier.title': 'Тирлист наций',
      'tier.col.nation': 'Нация',
      'tier.col.avg': 'Среднее',
      'tier.source': 'Источник: {link}',
      'faq.source': 'Источник: {link}',
      'force.label': 'Сила',
      'force.hint': 'кол-во юнитов / мощь',
      'backTop': 'Наверх',
      'lang.label': 'Язык',
    },
    en: {
      'nav.archive': 'Archive',
      'nav.stats': 'Statistics',
      'nav.rating': 'Rating',
      'nav.tierlist': 'Tier list',
      'nav.faq': 'FAQ',
      'nav.aria': 'Site sections',
      'title.archive': '⚔️ Game archive 🛡️',
      'title.stats': '📊 League statistics',
      'title.rating': '🏅 Player ratings',
      'title.tierlist': '⭐ Nation tier list',
      'title.faq': '❓ FAQ',
      'title.doc': 'Iron League — Archive & FAQ',
      'footer.archive': 'Data updates automatically',
      'footer.stats': 'Stats from archive games (excluding teams/scrap)',
      'footer.rating': 'Ratings recalculate on every archive load',
      'footer.tierlist': 'League nation tier list',
      'footer.faq': 'Frequently asked questions',
      'footer.default': '📁 Replay storage | Click “Watch replay” to load a GIF',
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
      'loading': 'Loading data...',
      'loading.tierlist': 'Loading tier list...',
      'loading.faq': 'Loading FAQ...',
      'error.load': '❌ Failed to load data. Check the console (F12)',
      'error.tierlist': 'Failed to load tier list',
      'error.faq': '❌ Failed to load FAQ',
      'empty.games': '😢 No games found',
      'badge.teams': 'Teams',
      'badge.scrap': 'Scrap',
      'badge.excluded': 'Excluded from stats/rating',
      'card.expand': '⛶ Fullscreen',
      'card.roster': 'Roster',
      'card.finale': 'Finale',
      'card.finaleFull': 'Finale (full stats)',
      'card.replay': '🎬 Watch replay',
      'card.hideReplay': '🎬 Hide replay',
      'card.winner': '🏆 WINNER:',
      'card.versionUnknown': 'Version unknown',
      'card.noFinale': 'No finale data yet (appears after a save sync)',
      'card.noFinaleShort': 'No finale data',
      'modal.close': 'Close',
      'modal.finish': 'Finish',
      'modal.turn': 'turn',
      'modal.replay': 'Replay',
      'replay.hint': 'Click the GIF to replay',
      'replay.title': 'Click to replay',
      'status.winner': '👑 Winner',
      'status.eliminated': '💀 Eliminated',
      'flag.noCapital': 'No capital',
      'flag.capitalTaken': 'Capital taken by: {who}',
      'flag.eliminatedUnknown': 'Eliminated (capital razed or unknown)',
      'flag.ideologyNone': 'no ideology',
      'captured.title': 'Captured capitals:',
      'wonders.title': 'Wonders:',
      'wonders.none': 'No wonders',
      'stat.score': 'Score',
      'stat.science': 'Science',
      'stat.cities': 'Cities',
      'stat.population': 'Population',
      'stat.techs': 'Techs',
      'stat.policies': 'Policies',
      'stat.policyBranches': 'Branches',
      'stat.spaceship': 'Spaceship',
      'stat.firstPolicy': 'First policy',
      'stat.era': 'Era',
      'stat.religion': 'Religion',
      'stat.ideology': 'Ideology',
      'stat.ideologyTurn': 'Ideology turn',
      'stat.elimTurn': 'Eliminated turn',
      'stat.capitalLostTurn': 'Capital lost turn',
      'stat.wars': 'Wars (declared / received)',
      'stat.atWar': 'At war with',
      'val.unknown': 'unknown',
      'val.notEliminated': 'not eliminated',
      'val.neverLostCapital': 'never lost',
      'val.ideologyNotAdopted': 'not adopted',
      'cc.line': 'WC: {nation} (turn {turn})',
      'cc.for': 'for',
      'cc.against': 'against',
      'cc.abstain': 'abstained',
      'league.draft': 'Draft picks: {list}',
      'league.bans': 'Bans: {list}',
      'victory.science': 'Science victory',
      'victory.culture': 'Cultural victory',
      'victory.domination': 'Domination victory',
      'victory.diplomatic': 'Diplomatic victory',
      'victory.time': 'Time victory',
      'victory.cc': 'Early end (World Congress)',
      'stats.toc': 'Statistics sections',
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
      'stats.col.player': 'Player',
      'stats.col.games': 'Games',
      'stats.col.wins': 'Wins',
      'stats.col.winrate': 'Winrate',
      'stats.col.capitalLosses': 'Capital losses',
      'stats.col.eliminated': 'Eliminations',
      'stats.col.nation': 'Nation',
      'stats.col.picks': 'Picks',
      'stats.col.topNation': 'Most picked',
      'stats.col.uniqueNations': 'Unique nations',
      'stats.col.wonders': 'Wonders (sum)',
      'stats.col.conquered': 'Capitals taken',
      'stats.col.gamesWithStats': 'Games with stats',
      'stats.col.score': 'Score',
      'stats.col.units': 'Units',
      'stats.col.strength': 'Strength',
      'stats.col.science': 'Science',
      'stats.col.cities': 'Cities',
      'stats.col.population': 'Population',
      'stats.col.techs': 'Techs',
      'stats.col.topPolicies': 'Top-3 policies',
      'rating.intro':
        'Ratings are computed in the browser from Games.json on every page load (adding/removing a game in the archive updates the tables). Only ranked FFA games without teams/scrap flags count. Placement: winner first, then living players by score, then eliminated.',
      'rating.toc': 'Rating sections',
      'rating.combined': 'Combined rating',
      'rating.combinedHint':
        'Arithmetic mean of the three ratings below. Also shows average place across the three tables (lower is better).',
      'rating.ffa': 'FFA Elo (linear place)',
      'rating.ffaHint':
        'As in Google Sheet ratingv2: start 1000, K is chosen below. Actual is place from 1 (first) to 0 (last). Expected is the average Elo expectancy vs each opponent. ΔR = K × (Actual − Expected).',
      'rating.pairwise': 'Pairwise Elo',
      'rating.pairwiseHint':
        'Start 1000, total K per game (see switcher). Each higher place “beats” each lower; K is split across pairs. Classic zero-sum FFA Elo.',
      'rating.kLabel': 'K factor',
      'rating.kHint': 'Affects FFA Elo and pairwise (not finish-place rating). Default 24.',
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
      'tier.title': 'Nation tier list',
      'tier.col.nation': 'Nation',
      'tier.col.avg': 'Average',
      'tier.source': 'Source: {link}',
      'faq.source': 'Source: {link}',
      'force.label': 'Strength',
      'force.hint': 'units / power',
      'backTop': 'Top',
      'lang.label': 'Language',
    },
  };

  let lang = 'ru';

  function getLang() {
    return lang;
  }

  function t(key, vars) {
    const pack = I18N[lang] || I18N.ru;
    let text = pack[key] || I18N.ru[key] || key;
    if (vars && typeof vars === 'object') {
      Object.keys(vars).forEach((k) => {
        text = text.replace(new RegExp(`\\{${k}\\}`, 'g'), String(vars[k]));
      });
    }
    return text;
  }

  function translateTerm(name) {
    if (lang !== 'en' || name == null || name === '') return name;
    return TERM_EN[name] || name;
  }

  /** @deprecated use translateTerm */
  function translatePolicy(name) {
    return translateTerm(name);
  }

  function translateSpaceship(name) {
    if (name == null || name === '') return name;
    if (lang === 'en') return name;
    return SPACESHIP_RU[name] || name;
  }

  function translateMap(name) {
    if (name == null || name === '') return name;
    const raw = String(name).trim();
    if (!raw) return name;
    if (lang === 'en') {
      if (MAP_EN[raw]) return MAP_EN[raw];
      const hit = Object.keys(MAP_EN).find((k) => k.toLowerCase() === raw.toLowerCase());
      return hit ? MAP_EN[hit] : raw;
    }
    if (MAP_RU[raw]) return MAP_RU[raw];
    const key = Object.keys(MAP_RU).find((k) => k.toLowerCase() === raw.toLowerCase());
    return key ? MAP_RU[key] : raw;
  }

  function setLang(next) {
    lang = next === 'en' ? 'en' : 'ru';
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) { /* ignore */ }
    document.documentElement.lang = lang;
    document.title = t('title.doc');
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (key) el.textContent = t(key);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (key) el.setAttribute('placeholder', t(key));
    });
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const key = el.getAttribute('data-i18n-aria');
      if (key) el.setAttribute('aria-label', t(key));
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
    translateTerm,
    translateSpaceship,
    translateMap,
    TERM_EN,
    POLICY_EN: TERM_EN,
  };
})(typeof window !== 'undefined' ? window : globalThis);
