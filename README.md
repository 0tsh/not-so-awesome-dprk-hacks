# DPRK cyber activity: a compiled list

A list of cyber activity attributed to North Korea (DPRK), compiled from public sources and recorded as each source published it. It is a compilation, not an analysis: nothing here is a finding, a ranking, or a verdict on who did what. Each source's own attribution is copied as written (including "suspected", "possible link" and the like).

Last built: 2026-10-08.

## Files

| File | What it is |
|---|---|
| `events/` | **One file per event** (2,472). Entries from different sources that describe the same event are folded into one file, each source's own wording kept as its own entry. |
| `attacks-on-north-korea/` | Attacks **on** North Korea (23 entries). Kept out of the list above on purpose. |
| `datasets/` | The original CSVs, kept as an archive. |
| `CONTRIBUTING.md` | How to add or fix an event with a pull request. |
| `SOURCES.md` | Every source: who published it, what was taken, how many entries, and notes. |
| `METHODOLOGY.md` | How the data was collected, cleaned and merged, what it does not cover, and how to submit entries or corrections. **Read this before using the data.** |

## Layout

- `events/`: one Markdown file per event (`nkh-00123.md`). Everything is in the front matter: dates, names, countries, amounts and actors as the sources wrote them, plus each source's own entry (its words and URL).
- `attacks-on-north-korea/`: attacks **on** North Korea, kept apart on purpose.
- `datasets/`: the original CSVs the files were first made from. An archive; no longer updated.

Browse and search the same data at **https://cyber.nkzine.com**, built from this repo by [0tsh/cyber-nkzine-site](https://github.com/0tsh/cyber-nkzine-site). To add or fix an event, see `CONTRIBUTING.md`.

The year and actor-name pages on the site are navigation only: the year is the first four-digit year found in the dates as written, and actor names are the actors field split on commas, semicolons and slashes, never merged or renamed.

## Archive: `hacks.csv` columns

- `row_id`, `source`, `date_as_written`, `incident`, `country`, `tags`, `actors`, `dollar_figures_as_written`, `note`, `text`, `source_url`: the main columns, taken from the first source that has the event.
- `<source>_entry_id`, `_date_as_written`, `_name`, `_text`, `_source_url`: that source's own entry, one set per source. Several entries from one source are separated by ` || `.
- `filled_country`, `filled_actors`, `filled_dollar_figures_as_written`, `filled_source_url`, each with `_source_url` and `_quote`: values found later for fields that were empty, with the page and the sentence they came from. `not found` means a search found nothing.
- Dates, amounts and names are exactly as the source wrote them. Nothing is converted or parsed.

## The raw downloads are not included

The saved downloads (web pages, PDFs, court filings, datasets) are about 7 GB and are kept outside the repository. Every row's `source_url` points to the original page, and each row's `text` holds the source's own words. The original files can be produced on request: open an issue and name the rows or sources you need. See "Raw data, corrections and submissions" in `METHODOLOGY.md`.
