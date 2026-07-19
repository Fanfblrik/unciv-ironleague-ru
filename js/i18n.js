/**
 * RU/EN UI strings for Iron League site.
 * Policies/ideologies are stored in Russian (mod); beliefs often in English (Unciv).
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

  /**
   * English Unciv/mod belief names → Russian (as in-game with the mod).
   * Built from Unciv Russian.properties + Iron League / BNW extras.
   */
  const BELIEF_RU = {
    'Altars of Worship': 'Алтари поклонения',
    'Alters of Worship': 'Алтари поклонения',
    'Ancestor Worship': 'Культ предков',
    'Apostolic Palace': 'Апостольский дворец',
    'Cathedrals': 'Соборы',
    'Ceremonial Burial': 'Ритуальное погребение',
    'Choral Music': 'Хоралы',
    'Church Property': 'Церковная собственность',
    'City of God': 'Град Божий',
    'Dance of the Aurora': 'Танец Авроры',
    'Dawah': 'Даава',
    'Defender of the Faith': 'Защитник веры',
    'Desert Folklore': 'Легенда пустыни',
    'Devoted Elite': 'Преданная элита',
    'Devout Performers': 'Набожные исполнители',
    'Dharma': 'Дхарма',
    'Disciples': 'Ученики',
    'Divine inspiration': 'Божественное вдохновение',
    'Divine Inspiration': 'Божественное вдохновение',
    'Earth Mother': 'Мать-Земля',
    'Feed the World': 'Накорми мир',
    'Followers of Refined Crafts': 'Последователи изящных ремёсел',
    'God of Craftsman': 'Бог ремесленников',
    'God of Craftsmen': 'Бог ремесленников',
    'God of the Open Sky': 'Бог открытого неба',
    'God of the Sea': 'Бог моря',
    'God of War': 'Бог войны',
    'God-King': 'Бог-царь',
    'Goddess of Love': 'Богиня любви',
    'Goddess of Protection': 'Богиня защиты',
    'Goddess of the Fields': 'Богиня полей',
    'Goddess of the Hunt': 'Богиня охоты',
    'Gurdwaras': 'Гурдвары',
    'Guruship': 'Наставничество',
    'Hajj': 'Хадж',
    'Harvest Festival': 'Праздник урожая',
    'Holy Warriors': 'Священные воины',
    'Houses of Worship': 'Дома поклонения',
    'Indulgences': 'Индульгенции',
    'Initiation Rites': 'Обряды посвящения',
    'Jesuit Education': 'Иезуитское образование',
    'Jizya': 'Джизья',
    'Just War': 'Справедливая война',
    'Karma': 'Карма',
    'Kotel': 'Котель',
    'Liturgical Drama': 'Литургическая драма',
    'Mandirs': 'Мандиры',
    'Messenger of the Gods': 'Посланник богов',
    'Messiah': 'Мессия',
    'Missionary Zeal': 'Миссионерское усердие',
    'Mithraea': 'Митреумы',
    'Mosques': 'Мечети',
    'Mystic Rituals': 'Мистические ритуалы',
    "Ocean's Bounty": 'Дары океана',
    'One with Nature': 'Единение с природой',
    'Oral Tradition': 'Устное предание',
    'Pagodas': 'Пагоды',
    'Peace Gardens': 'Сады мира',
    'Rain Dancing': 'Танец дождя',
    'Religious Art': 'Религиозное искусство',
    'Religious Center': 'Религиозный центр',
    'Religious Community': 'Религиозное сообщество',
    'Religious Idols': 'Религиозные идолы',
    'Religious Settlements': 'Религиозные поселения',
    'Religious Troubadours': 'Религиозные трубадуры',
    'Religious Unity': 'Религиозное единство',
    'Reliquary': 'Реликварий',
    'Rite of Spring': 'Весенний обряд',
    'Ritual Sacrifice': 'Ритуальное жертвоприношение',
    'Sacred Path': 'Священный путь',
    'Sacred Sites': 'Священные места',
    'Sacred Waters': 'Священные воды',
    'Salat': 'Салят',
    'Sanctified Innovations': 'Освящённые новшества',
    'Seafood Rituals': 'Ритуалы даров моря',
    'Spirit Animals': 'Духи-животные',
    'Spirit Trees': 'Духи деревьев',
    'Starlight Guidance': 'Звёздное водительство',
    'Stone Circles': 'Каменные круги',
    'Sun God': 'Бог солнца',
    'Swords into Ploughshares': 'Мечи на орала',
    'Synagogues': 'Синагоги',
    'Tears of the Gods': 'Слёзы богов',
    'Tithe': 'Десятина',
    'Underground Sect': 'Подпольная секта',
    'Unity of the Prophets': 'Единство пророков',
    'Viharas': 'Вихары',
    'Vision Quests': 'Поиски видений',
    'Work Ethic': 'Трудовая этика',
    'Work Spirituals': 'Трудовые спиричуэлы',
    'World Church': 'Всемирная церковь',
    'Zakat': 'Закят',
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
      'wonders.built': 'Свои чудеса:',
      'wonders.taken': 'Захваченные чудеса:',
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
      'stats.detailHint':
        'Частая нация и идеология, сумма владеемых чудес, сумма своих чудес (wonders_built) и захваченных столиц — по данным «Финал» (без teams/scrap).',
      'stats.averages': 'Игроки: средние показатели',
      'stats.averagesHint': 'Средние по финалу (survivors) только по актуальным играм. Топ‑3 первых институтов — по первому открытому институту.',
      'stats.policies': 'Институты и идеологии',
      'stats.policiesHint':
        'Первый институт, открытые ветки, полные связки веток (как в финале архива), пары «ветка + идеология» и сами идеологии.\n«Ср. место» — нормированное placeScore (1 = победа … 0 = последнее), чтобы уравнять лобби разного размера.\nВинрейт — доля побед среди пиков этой опции (не среди всех игроков партии).',
      'stats.firstPolicies': 'Первый институт',
      'stats.policyBranches': 'Ветки институтов',
      'stats.policyCombos': 'Связки институтов',
      'stats.policyCombosHint':
        'Полный набор открытых веток из финала (поле policy_branches), в том же порядке, что в карточке игрока. Одна строка = одна связка.',
      'stats.policyIdeologyPairs': 'Пары институт + идеология',
      'stats.policyIdeologyPairsHint':
        'Каждая открытая ветка институтов вместе с принятой идеологией той же партии (если идеология есть).',
      'stats.ideologies': 'Идеологии',
      'stats.col.combo': 'Связка',
      'stats.col.pair': 'Пара',
      'stats.wondersBuilt': 'Чудеса (свои)',
      'stats.wondersBuiltHint':
        'Только чудеса в городах, основанных этой цивилизацией (поле wonders_built).\nЗахваченные чудеса (в чужих foundingCiv) сюда не входят — их смотрите в финале в блоке «Захваченные чудеса».',
      'stats.beliefs': 'Религиозные верования',
      'stats.beliefsHint':
        'Пантеоны, верования основателя и последователей из финального сейва.\n«Ср. место» — то же нормированное placeScore, что в таблицах институтов.',
      'stats.pantheons': 'Пантеоны',
      'stats.founderBeliefs': 'Верования основателя',
      'stats.followerBeliefs': 'Верования последователей',
      'stats.col.player': 'Игрок',
      'stats.col.games': 'Игр',
      'stats.col.wins': 'Побед',
      'stats.col.winrate': 'Винрейт',
      'stats.col.capitalLosses': 'Потерь столицы',
      'stats.col.eliminated': 'Выбываний',
      'stats.col.nation': 'Нация',
      'stats.col.picks': 'Пиков',
      'stats.col.builds': 'Построек',
      'stats.col.topNation': 'Чаще всего',
      'stats.col.topIdeology': 'Идеология',
      'stats.col.uniqueNations': 'Уник. наций',
      'stats.col.wonders': 'Чудес (сумма)',
      'stats.col.wondersBuilt': 'Чудес своих',
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
      'stats.col.item': 'Название',
      'stats.col.ideology': 'Идеология',
      'stats.col.wonder': 'Чудо',
      'stats.col.belief': 'Верование',
      'stats.col.avgPlaceNorm': 'Ср. место',
      'rating.intro':
        'Рейтинг считается в браузере из Games.json при каждой загрузке страницы (добавили или убрали игру в архиве — таблицы пересчитаются сами).\n\nКакие игры входят\n• Только актуальные FFA без флагов teams / scrap (и без excludeFromStats).\n• Игры обрабатываются по номеру по возрастанию (хронология лиги).\n\nКак определяется место в одной партии\n1) Победитель (нация winner) — всегда 1-е место.\n2) Среди остальных: сначала живые, потом выбывшие.\n3) Внутри группы — по очкам финала (score) по убыванию; если очков нет — по нику.\n\nШкалы на странице\n• Классическая (таблицы выше): все стартуют с 1000; финиш мапится на ~1000 ± 400.\n• «Рейтинг от нуля»: Elo стартует с 0; финиш — чистое среднее placeScore × 100 (без базы 1000).\n• «Очки лобби»: отдельные накопительные шкалы от нуля — за размер лобби N и либо бонус победителю +10, либо Avg финальных показателей (см. блоки ниже).\nОдинаковые методы Elo (FFA / pairwise / финиш / сводная) на двух шкалах; очки лобби — отдельная логика, не Elo.',
      'rating.toc': 'Разделы рейтинга',
      'rating.combined': 'Сводный рейтинг',
      'rating.combinedHint':
        'Сводный рейтинг = среднее арифметическое трёх чисел: Elo FFA, Elo pairwise и рейтинга по финишу.\nКолонка «Ср. место» — среднее мест игрока в этих трёх таблицах (меньше — лучше).\nТакже показаны отдельные места в каждой методике, чтобы видеть расхождения.',
      'rating.ffa': 'Elo FFA (линейное место)',
      'rating.ffaHint':
        'Метод как в Google Sheet ratingv2 (линейное место).\n\nДля лобби из N игроков место i (0 = победитель, N−1 = последний) даёт Actual = (N−1−i) / (N−1): победитель = 1, последний = 0, остальные равномерно между ними.\n\nExpected для игрока A — среднее классических Elo-ожиданий против каждого соперника B:\nE(A,B) = 1 / (1 + 10^((Rb−Ra)/400)).\n\nОбновление после игры: Ra ← Ra + K × (Actual − Expected).\nСумма изменений по лобби не обязана быть нулевой (это не попарный zero-sum).',
      'rating.pairwise': 'Elo pairwise',
      'rating.pairwiseHint':
        'Классический FFA-Elo с нулевой суммой по парам.\n\nВ лобби из N игроков строится C(N,2) = N(N−1)/2 виртуальных дуэлей: каждый вышестоящий «побеждает» каждого нижестоящего.\nНа одну дуэль идёт k_pair = K / C(N,2), чтобы суммарный масштаб за игру оставался порядка K.\n\nДля пары (выше A, ниже B):\nΔA = k_pair × (1 − E(A,B)),  ΔB = k_pair × (0 − (1 − E(A,B))) = −ΔA,\nгде E(A,B) = 1 / (1 + 10^((Rb−Ra)/400)).\n\nИтог за игру — сумма Δ по всем парам. Сумма изменений рейтинга по всем игрокам партии = 0.',
      'rating.kLabel': 'Коэффициент K',
      'rating.kHint':
        'K задаёт «жёсткость» обновления Elo за одну игру для FFA и pairwise (и в классике, и в «рейтинге от нуля»).\n• 20 — спокойнее, меньше скачков.\n• 24 — значение по умолчанию.\n• 32 — как в старом Google Sheet ratingv2, сильнее реагирует на результат.\nНа «Рейтинг по финишу», finish-часть «от нуля» и на «Очки лобби» этот K не влияет. Выбор сохраняется в браузере.',
      'rating.finish': 'Рейтинг по финишу',
      'rating.finishHint':
        'Не Elo, а оценка среднего финиша на шкале ~1000.\n\nВ каждой игре место даёт placeScore = (N−1−i)/(N−1) (1 = победа … 0 = последнее).\nСчитается среднее placeScore по всем учтённым играм игрока: avg.\nЦелевой рейтинг: target = 1000 + 400 × (avg − 0.5)\n(стабильно первые ≈ 1200, стабильно последние ≈ 800).\n\nСмешивание с текущим значением: вес w = min(1, games/8), R ← R×(1−w) + target×w — чем больше игр, тем ближе к долгосрочному среднему.\nK на этот метод не влияет.',
      'rating.zero': 'Рейтинг от нуля',
      'rating.zeroHint':
        'Та же тройка методов и сводная таблица, но без стартовой константы 1000 — чтобы числа читались как «накопившийся результат», а не как Elo вокруг тысячи.\n\nЧем отличается от классики\n• Elo FFA / pairwise: старт = 0 (в классике 1000). Формулы Expected и K те же; у сильных игроков рейтинг уходит в плюс, у слабых — в минус.\n• Финиш: просто среднее placeScore × 100 (примерно 0…100). Нет target = 1000 ± 400 и нет смешивания w = games/8 — только сырое среднее нормированного места.\n• Сводная «от нуля» = среднее трёх zero-based чисел (не смешивается с классической сводной).\n\nКлассические таблицы выше не меняются: смотрите обе шкалы рядом.',
      'rating.lobbyWin': 'Очки лобби (победа)',
      'rating.lobbyWinHint':
        'Накопительный рейтинг от нуля (не Elo). N — число игроков в лобби этой партии.\n\nЗа каждую учтённую игру:\n• всем участникам: +(N − 1)\n• победителю дополнительно: +10\n  то есть победитель получает (N − 1) + 10, остальные — ровно (N − 1).\n\nПример: лобби из 8 → всем по 7, победителю 17. Очки суммируются по играм по возрастанию номера. Коэффициент Elo K сюда не входит.',
      'rating.lobbyAvg': 'Очки лобби (Avg)',
      'rating.lobbyAvgHint':
        'Накопительный рейтинг от нуля, похожий на «Очки лобби (победа)», но вместо бонуса +10 у победителя у каждого игрока своя надбавка Avg.\n\nЗа каждую учтённую игру игрок получает: (N − 1) + Avg,\nгде N — размер лобби, Avg — среднее арифметическое доступных финальных показателей из survivors: технологии (techs), институты (policies), города (cities). Отсутствующие/нечисловые поля в среднее не входят; если данных нет — Avg = 0 (остаётся только участие N−1).\n\nОтличие от варианта с победой: здесь нет отдельного +10 за win — сильнее развитие в финале даёт больше очков всем местам. Elo K не влияет.',
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
      'tier.legend.5': 'Имба / бан',
      'tier.legend.4': 'Сильная',
      'tier.legend.3': 'Средняя',
      'tier.legend.2': 'Слабая',
      'tier.legend.1': 'Дно',
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
      'wonders.built': 'Self-built wonders:',
      'wonders.taken': 'Conquered wonders:',
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
      'stats.detailHint':
        'Most-picked nation and ideology, sum of owned wonders, sum of self-built wonders (wonders_built), and captured capitals — from Finale data (no teams/scrap).',
      'stats.averages': 'Players: averages',
      'stats.averagesHint': 'Finale averages (survivors) for ranked games only. Top-3 opener policies from first unlocked policy branch.',
      'stats.policies': 'Policies & ideologies',
      'stats.policiesHint':
        'First policy opener, adopted branches, full branch combos (as in archive finale), “branch + ideology” pairs, and ideologies.\n“Avg place” is normalized placeScore (1 = win … 0 = last) so lobbies of different sizes are comparable.\nWin rate is wins among picks of that option (not among every player in the lobby).',
      'stats.firstPolicies': 'First policy',
      'stats.policyBranches': 'Policy branches',
      'stats.policyCombos': 'Policy combos',
      'stats.policyCombosHint':
        'Full set of adopted branches from finale (policy_branches), same order as on the player card. One row = one combo.',
      'stats.policyIdeologyPairs': 'Policy + ideology pairs',
      'stats.policyIdeologyPairsHint':
        'Each adopted policy branch paired with the ideology taken in that game (when an ideology is present).',
      'stats.ideologies': 'Ideologies',
      'stats.col.combo': 'Combo',
      'stats.col.pair': 'Pair',
      'stats.wondersBuilt': 'Wonders (self-built)',
      'stats.wondersBuiltHint':
        'Only wonders in cities founded by that civ (wonders_built).\nConquered wonders (foreign foundingCiv) are excluded here — see them in Finale under “Conquered wonders”.',
      'stats.beliefs': 'Religious beliefs',
      'stats.beliefsHint':
        'Pantheons, founder and follower beliefs from the final save.\n“Avg place” uses the same normalized placeScore as the policy tables.',
      'stats.pantheons': 'Pantheons',
      'stats.founderBeliefs': 'Founder beliefs',
      'stats.followerBeliefs': 'Follower beliefs',
      'stats.col.player': 'Player',
      'stats.col.games': 'Games',
      'stats.col.wins': 'Wins',
      'stats.col.winrate': 'Winrate',
      'stats.col.capitalLosses': 'Capital losses',
      'stats.col.eliminated': 'Eliminations',
      'stats.col.nation': 'Nation',
      'stats.col.picks': 'Picks',
      'stats.col.builds': 'Built',
      'stats.col.topNation': 'Most picked',
      'stats.col.topIdeology': 'Ideology',
      'stats.col.uniqueNations': 'Unique nations',
      'stats.col.wonders': 'Wonders (sum)',
      'stats.col.wondersBuilt': 'Self-built',
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
      'stats.col.item': 'Name',
      'stats.col.ideology': 'Ideology',
      'stats.col.wonder': 'Wonder',
      'stats.col.belief': 'Belief',
      'stats.col.avgPlaceNorm': 'Avg place',
      'rating.intro':
        'Ratings are computed in the browser from Games.json on every page load (adding/removing an archive game recalculates the tables).\n\nWhich games count\n• Ranked FFA only — no teams / scrap flags (and no excludeFromStats).\n• Games are processed in ascending game-number order (league chronology).\n\nPlacement inside one game\n1) The winner (winner nation) is always 1st.\n2) Among the rest: living players first, then eliminated.\n3) Within a group — by finale score descending; if score is missing — by nickname.\n\nScales on this page\n• Classic tables above: everyone starts at 1000; finish maps onto ~1000 ± 400.\n• “Zero-based rating”: Elo starts at 0; finish is raw mean placeScore × 100 (no 1000 baseline).\n• “Lobby points”: separate cumulative zero-based scales — lobby size N plus either a +10 win bonus or Avg of finale stats (see blocks below).\nSame Elo methods (FFA / pairwise / finish / combined) on two scales; lobby points are a different, non-Elo system.',
      'rating.toc': 'Rating sections',
      'rating.combined': 'Combined rating',
      'rating.combinedHint':
        'Combined rating = arithmetic mean of FFA Elo, pairwise Elo, and finish-place rating.\n“Avg place” is the mean of the player’s ranks in those three tables (lower is better).\nPer-method places are shown so you can see where methods disagree.',
      'rating.ffa': 'FFA Elo (linear place)',
      'rating.ffaHint':
        'Same idea as Google Sheet ratingv2 (linear place).\n\nIn a lobby of N players, place i (0 = winner, N−1 = last) gives Actual = (N−1−i)/(N−1): winner = 1, last = 0, others spaced evenly.\n\nExpected for player A is the average classic Elo expectancy vs each opponent B:\nE(A,B) = 1 / (1 + 10^((Rb−Ra)/400)).\n\nUpdate after the game: Ra ← Ra + K × (Actual − Expected).\nLobby deltas need not sum to zero (this is not pairwise zero-sum).',
      'rating.pairwise': 'Pairwise Elo',
      'rating.pairwiseHint':
        'Classic zero-sum FFA Elo via pairs.\n\nIn a lobby of N players there are C(N,2) = N(N−1)/2 virtual duels: each higher place “beats” each lower place.\nEach duel uses k_pair = K / C(N,2) so the total scale per game stays about K.\n\nFor pair (higher A, lower B):\nΔA = k_pair × (1 − E(A,B)),  ΔB = −ΔA,\nwhere E(A,B) = 1 / (1 + 10^((Rb−Ra)/400)).\n\nA player’s game delta is the sum over all pairs. Sum of rating changes in the lobby = 0.',
      'rating.kLabel': 'K factor',
      'rating.kHint':
        'K controls how hard Elo moves after one game for FFA and pairwise (classic and zero-based alike).\n• 20 — calmer, smaller swings.\n• 24 — default.\n• 32 — as in the old Google Sheet ratingv2, more reactive.\nFinish-place rating, the finish part of zero-based, and Lobby points ignore this K. Your choice is stored in the browser.',
      'rating.finish': 'Finish-place rating',
      'rating.finishHint':
        'Not Elo — a finish-average mapped onto a ~1000 scale.\n\nEach game awards placeScore = (N−1−i)/(N−1) (1 = win … 0 = last).\navg = mean placeScore over the player’s counted games.\ntarget = 1000 + 400 × (avg − 0.5)\n(always 1st ≈ 1200, always last ≈ 800).\n\nBlend: w = min(1, games/8), R ← R×(1−w) + target×w — more games pull toward the long-run average.\nK does not affect this method.',
      'rating.zero': 'Zero-based rating',
      'rating.zeroHint':
        'The same three methods plus a combined table, but without the 1000 starting constant — so numbers read as accumulated results rather than Elo clustered around a thousand.\n\nHow it differs from classic\n• FFA / pairwise Elo: start = 0 (classic starts at 1000). Same Expected formula and K; strong players go positive, weak players go negative.\n• Finish: plain mean placeScore × 100 (roughly 0…100). No target = 1000 ± 400 and no w = games/8 blend — only the raw average normalized place.\n• Zero-based combined = mean of the three zero-based numbers (not mixed with the classic combined table).\n\nClassic tables above stay unchanged; compare both scales side by side.',
      'rating.lobbyWin': 'Lobby points (win)',
      'rating.lobbyWinHint':
        'Cumulative zero-based rating (not Elo). N is the lobby size for that game.\n\nEach counted game awards:\n• every participant: +(N − 1)\n• the winner an extra: +10\n  so the winner gets (N − 1) + 10, everyone else exactly (N − 1).\n\nExample: 8-player lobby → 7 each, winner 17. Points sum across games in ascending game-number order. Elo K does not apply.',
      'rating.lobbyAvg': 'Lobby points (Avg)',
      'rating.lobbyAvgHint':
        'Cumulative zero-based rating, similar to “Lobby points (win)”, but instead of a flat +10 for the winner each player gets their own Avg bonus.\n\nEach counted game awards: (N − 1) + Avg,\nwhere N is lobby size and Avg is the arithmetic mean of available finale survivor stats: techs, policies, cities. Missing/non-numeric fields are skipped; if none are available Avg = 0 (participation N−1 only).\n\nUnlike the win variant there is no separate +10 for winning — stronger finale development yields more points at every place. Elo K does not apply.',
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
      'tier.legend.5': 'Overpowered / Ban Worthy',
      'tier.legend.4': 'Strong',
      'tier.legend.3': 'Average',
      'tier.legend.2': 'Bad',
      'tier.legend.1': 'Bottom',
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
    if (name == null || name === '') return name;
    const raw = String(name).trim();
    if (!raw) return name;
    if (lang === 'en') {
      return TERM_EN[raw] || raw;
    }
    // RU UI: beliefs are often English in Games.json — show mod/in-game Russian.
    return BELIEF_RU[raw] || raw;
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
