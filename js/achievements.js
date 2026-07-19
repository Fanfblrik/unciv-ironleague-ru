/**
 * Iron League records / achievements from Games.json.
 * Рекорды и достижения Iron League по Games.json.
 *
 * Excludes teams/scrap (same rules as rating.js). Winner = nation name → player.
 * Исключает teams/scrap (как rating.js). Победитель: нация → игрок.
 */
(function (global) {
  'use strict';

  const BARBARIAN_NAMES = new Set(['barbarians', 'варвары']);
  const PIETY_NAMES = new Set(['набожность', 'piety']);

  function gameFlags(game) {
    return Array.isArray(game.flags) ? game.flags.map(String) : [];
  }

  function isExcludedGame(game) {
    if (game && game.excludeFromStats) return true;
    const flags = gameFlags(game).map((f) => f.toLowerCase());
    return flags.includes('teams') || flags.includes('scrap') || flags.includes('team');
  }

  function parseGameNum(game) {
    const m = String(game.number || '').match(/(\d+)/);
    return m ? parseInt(m[1], 10) : Number(game.id) || 0;
  }

  function eligibleGames(games) {
    return (games || [])
      .filter((g) => !isExcludedGame(g))
      .filter((g) => Array.isArray(g.players) && g.players.length > 0)
      .slice()
      .sort((a, b) => parseGameNum(a) - parseGameNum(b));
  }

  function isBarbarianName(name) {
    return BARBARIAN_NAMES.has(String(name || '').trim().toLowerCase());
  }

  function isPiety(policy) {
    return PIETY_NAMES.has(String(policy || '').trim().toLowerCase());
  }

  function survivorByName(game, name) {
    const key = String(name || '').trim();
    const survivors = Array.isArray(game.survivors) ? game.survivors : [];
    return survivors.find((s) => String(s.name || '').trim() === key) || null;
  }

  /** Resolve winner username from Russian nation in game.winner. */
  function winnerPlayer(game) {
    const nation = String(game.winner || '').trim();
    if (!nation) return null;
    for (const s of game.survivors || []) {
      if (String(s.nation || '').trim() === nation) {
        const name = String(s.name || '').trim();
        return name || null;
      }
    }
    for (const p of game.players || []) {
      if (String(p.nation || '').trim() === nation) {
        const name = String(p.name || '').trim();
        return name || null;
      }
    }
    return null;
  }

  function playerNames(game) {
    const names = new Set();
    for (const p of game.players || []) {
      const n = String(p.name || '').trim();
      if (n) names.add(n);
    }
    for (const s of game.survivors || []) {
      const n = String(s.name || '').trim();
      if (n) names.add(n);
    }
    return [...names].filter((n) => n && !isBarbarianName(n));
  }

  function emptyStat() {
    return {
      played: 0,
      wins: 0,
      winsWithCaps: 0,
      winsNoCaps: 0,
      caps: 0,
      deaths: 0,
      wondersBuilt: 0,
      elim: 0,
      finaleGames: 0,
      pietyCount: 0,
      pietyStreak: 0,
      pietyRun: 0,
      winTurns: [],
      maxCapsInWin: 0,
      maxCapsInWinGame: null,
    };
  }

  function buildStats(games) {
    const list = eligibleGames(games);
    const stats = new Map();

    function ensure(name) {
      if (!stats.has(name)) stats.set(name, emptyStat());
      return stats.get(name);
    }

    for (const game of list) {
      const wp = winnerPlayer(game);
      const turn = Number(game.endedOnTurn);
      const gNum = parseGameNum(game);
      for (const name of playerNames(game)) {
        const s = ensure(name);
        s.played += 1;
        const row = survivorByName(game, name);
        let piety = false;
        if (row) {
          s.finaleGames += 1;
          const caps = Array.isArray(row.conquered_capitals) ? row.conquered_capitals.length : 0;
          s.caps += caps;
          s.deaths += Number(row.military_deaths) || 0;
          s.wondersBuilt += Array.isArray(row.wonders_built) ? row.wonders_built.length : 0;
          if (row.alive === false) s.elim += 1;
          if (isPiety(row.first_policy)) {
            s.pietyCount += 1;
            piety = true;
          }
        }
        if (piety) {
          s.pietyRun += 1;
          s.pietyStreak = Math.max(s.pietyStreak, s.pietyRun);
        } else {
          s.pietyRun = 0;
        }
        if (name === wp) {
          s.wins += 1;
          const caps = Array.isArray((row || {}).conquered_capitals)
            ? row.conquered_capitals.length
            : 0;
          if (caps > 0) s.winsWithCaps += 1;
          else s.winsNoCaps += 1;
          if (caps > s.maxCapsInWin) {
            s.maxCapsInWin = caps;
            s.maxCapsInWinGame = gNum;
          }
          if (Number.isFinite(turn) && turn > 0) {
            s.winTurns.push({ turn, game: gNum });
          }
        }
      }
    }
    return { stats, games: list };
  }

  function pickMax(stats, scoreFn, filterFn) {
    let best = null;
    let bestScore = -Infinity;
    for (const [name, s] of stats) {
      if (filterFn && !filterFn(s)) continue;
      const score = scoreFn(s);
      if (!Number.isFinite(score)) continue;
      if (
        score > bestScore
        || (score === bestScore && best && name.localeCompare(best.player) < 0)
      ) {
        bestScore = score;
        best = { player: name, stat: s, score };
      }
    }
    return best;
  }

  /**
   * Compute league records from archive games.
   * Считает рекорды лиги по архиву.
   *
   * :param games: Games.json games array / массив игр
   * :return: achievement objects for the UI / объекты ачивок для UI
   */
  function computeAchievements(games) {
    const { stats } = buildStats(games);
    const out = [];

    function push(id, hit, value, extra) {
      if (!hit) return;
      out.push(Object.assign({ id, player: hit.player, value }, extra || {}));
    }

    const mostWins = pickMax(stats, (s) => s.wins, (s) => s.wins > 0);
    if (mostWins) {
      push('most_wins', mostWins, String(mostWins.stat.wins), { games: mostWins.stat.played });
    }

    // Prefer perfect winrate (min 3 games), most wins; else best rate among min-3.
    let winrateHit = pickMax(
      stats,
      (s) => s.wins,
      (s) => s.played >= 3 && s.wins === s.played,
    );
    if (!winrateHit) {
      winrateHit = pickMax(
        stats,
        (s) => s.wins / s.played,
        (s) => s.played >= 3 && s.wins > 0,
      );
    }
    if (winrateHit) {
      const pct = Math.round((winrateHit.stat.wins / winrateHit.stat.played) * 1000) / 10;
      push(
        'best_winrate',
        winrateHit,
        `${winrateHit.stat.wins}/${winrateHit.stat.played} (${pct}%)`,
        { perfect: winrateHit.stat.wins === winrateHit.stat.played },
      );
    }

    const allCapsWins = pickMax(
      stats,
      (s) => s.wins,
      (s) => s.wins >= 2 && s.winsNoCaps === 0,
    );
    if (allCapsWins) {
      push('wins_all_with_caps', allCapsWins, String(allCapsWins.stat.wins), {
        games: allCapsWins.stat.played,
      });
    }

    const capsInOne = pickMax(stats, (s) => s.maxCapsInWin, (s) => s.maxCapsInWin >= 2);
    if (capsInOne) {
      push('most_caps_single_win', capsInOne, String(capsInOne.stat.maxCapsInWin), {
        gameNumber: capsInOne.stat.maxCapsInWinGame,
      });
    }

    const mostCaps = pickMax(stats, (s) => s.caps, (s) => s.caps > 0);
    if (mostCaps) push('most_caps', mostCaps, String(mostCaps.stat.caps));

    let fastest = null;
    for (const [name, s] of stats) {
      for (const w of s.winTurns) {
        if (
          !fastest
          || w.turn < fastest.turn
          || (w.turn === fastest.turn && name < fastest.player)
        ) {
          fastest = { player: name, turn: w.turn, game: w.game };
        }
      }
    }
    if (fastest) {
      out.push({
        id: 'fastest_win',
        player: fastest.player,
        value: String(fastest.turn),
        gameNumber: fastest.game,
      });
    }

    const pietyCount = pickMax(stats, (s) => s.pietyCount, (s) => s.pietyCount >= 2);
    if (pietyCount) {
      push('piety_first_count', pietyCount, String(pietyCount.stat.pietyCount), {
        games: pietyCount.stat.played,
      });
    }

    const pietyStreak = pickMax(stats, (s) => s.pietyStreak, (s) => s.pietyStreak >= 2);
    if (pietyStreak) {
      push('piety_first_streak', pietyStreak, String(pietyStreak.stat.pietyStreak));
    }

    const wonders = pickMax(stats, (s) => s.wondersBuilt, (s) => s.wondersBuilt > 0);
    if (wonders) push('most_wonders_built', wonders, String(wonders.stat.wondersBuilt));

    const deaths = pickMax(stats, (s) => s.deaths, (s) => s.deaths > 0);
    if (deaths) push('most_military_deaths', deaths, String(deaths.stat.deaths));

    const noWin = pickMax(stats, (s) => s.played, (s) => s.played >= 5 && s.wins === 0);
    if (noWin) push('most_games_no_win', noWin, String(noWin.stat.played));

    const survivor = pickMax(
      stats,
      (s) => s.finaleGames,
      (s) => s.finaleGames >= 3 && s.elim === 0,
    );
    if (survivor) push('never_eliminated', survivor, String(survivor.stat.finaleGames));

    return out;
  }

  global.IronLeagueAchievements = {
    computeAchievements,
    isExcludedGame,
    eligibleGames,
    winnerPlayer,
  };
})(typeof window !== 'undefined' ? window : globalThis);
