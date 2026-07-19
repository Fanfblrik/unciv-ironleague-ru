# unciv-ironleague-ru
Unciv Russian League
https://destup.github.io/unciv-ironleague-ru/

## Что это

Статический сайт архива / статистики / рейтинга Iron League (Unciv) на GitHub Pages.
Данные игр лежат в `Games.json`; бот Civ Bot умеет открывать PR с новыми завершёнными партиями (`/syncironleague`, `/addironleague`).

## Структура репозитория

| Путь | Назначение |
|------|------------|
| `index.html` | Разметка и клиентская логика UI |
| `css/site.css` | Стили сайта |
| `js/` | `i18n.js` (RU/EN), `rating.js` (Elo / очки лобби), `achievements.js` (рекорды) |
| `Games.json` | Архив игр (корень — стабильный URL для бота и сайта) |
| `data/` | FAQ, тирлист, цвета наций, RU-имена чудес |
| `Nation_icons/`, `Wonder_icons/` | Иконки |
| `Replays/` | GIF-реплеи (`gif` в `Games.json`) |
| `bg/`, `faq_images/` | Фоны разделов и скрины FAQ |
| `build-id.txt` | Метка деплоя для cache-bust JSON/ассетов |
| `.github/workflows/bump-build-id.yml` | После пуша в `main` обновляет `build-id.txt` |

## Локальный просмотр

Нужен любой статический HTTP-сервер из корня репозитория (иначе `fetch` к JSON может упереться в CORS/`file://`):

```powershell
npx --yes serve -l 3000 .
# или: py -3 -m http.server 3000
```

Открой http://localhost:3000/

## Кэш и пересборка Pages

1. Push / merge в `main` → GitHub Pages собирает сайт.
2. Workflow **Bump build id** пишет новый UTC timestamp в `build-id.txt`.
3. Страница читает `build-id.txt` и добавляет `?v=…` к запросам `Games.json` и др., чтобы не залипала старая копия в браузере/CDN.

Если после merge в `main` билд не стартовал: в Actions вручную **Run workflow** у `Bump build id` (`workflow_dispatch`), либо сделай пустой/минимальный push в `main`.

Вкладка **Рекорды** считает ачивки клиентски из `Games.json` (без teams/scrap), как рейтинг.

## Синхронизация с ботом

Админ-команды Civ Bot (категория «Сайт IronLeague» в `/admin`):

- `/syncironleague` / `dry` — недостающие завершённые `gameN` → PR в этот репозиторий
- `/addironleague <uuid> [N]` — одна игра по Unciv `GAME_ID`
- `/ironleaguegifs` — записи без поля `gif`

Нужен `GITHUB_TOKEN` у бота с правом открывать PR в fork/`DeStup/unciv-ironleague-ru`.
