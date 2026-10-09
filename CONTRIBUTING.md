Every event is one Markdown file in `events/`. The files are the database: the site, the search index and the history of changes all come from them. To add or fix something, open a pull request.

## Add a new event

1. Copy `events/_template.md.example` to `events/new-<short-name>.md`. The file name without `.md` is the `id`; keep them identical. A maintainer renames it to the next `nkh-#####` id when merging.
2. Fill in the front matter. Rules (the same as `METHODOLOGY.md`):
   - `entries[].text` is the source's own words, quoted exactly. The source itself must name North Korea or a DPRK group as the actor. Do not add your own attribution.
   - `entries[].urls` has at least one public URL for that entry. Add an archive link too if you can.
   - Dates, amounts, names and countries are copied as the source wrote them. No conversions, no picking between conflicting figures, no rankings, no conclusions.
   - Keep hedges ("suspected", "possible link").
   - Attacks **on** North Korea go in `attacks-on-north-korea/`, not in `events/`.
   - Do not submit material obtained by bypassing access controls, from leaks, or from behind paywalls you do not have rights to.
3. Open a pull request. A check validates the front matter (ids match file names, every entry has the source's text and a URL).

## Fix an existing event

Edit that event's file. Say in the pull request what the source actually says and give its URL. For a wrong merge, say which entries (`entryId`) belong to a different event.

## Add a second source to an event

Add another item under `entries:` in that event's file and add its name to `sourceNames:`.

## Fields

`id`, `title`, `year` (a number, or `"undated"`; used only for the year pages), `dateAsWritten`, `country`, `tags`, `actors`, `actorNames` (list; navigation only), `dollarFiguresAsWritten`, `note`, `sourceNames`, `entries` (`source`, `entryId`, `dateAsWritten`, `name`, `text`, `urls`), and `filled` (`field`, `value`, `sourceUrl`, `quote`) for values found later for empty fields.

## The site

The website at cyber.nkzine.com is built from this repo by a separate repo, which holds the Astro code. Nothing here needs it to be edited.
