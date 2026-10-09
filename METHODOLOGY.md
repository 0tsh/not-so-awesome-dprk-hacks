# Methodology

## What this is

A compilation of every published account of North Korean (DPRK) cyber activity that could be found and read, up to 2026-10-08. The aim is breadth: espionage and phishing campaigns, destructive and wiper attacks, DDoS, ransomware, supply-chain attacks, cryptocurrency and bank theft, IT-worker infiltration schemes, and government and court actions about them. It is not a count of attacks. One row is one account of one event, and many events are described by many sources.

## Rules for recording data

1. **Values are copied as published.** Amounts ("$1.43 billion", "about 400,000 ETH"), dates ("Q3 2019", "2013.3.20"), names and countries are kept exactly as the source wrote them. Nothing is converted, parsed into numbers, ranked or reconciled.
2. **No conclusions.** When two sources disagree, both are recorded. No value is chosen as "best".
3. **Attribution comes from the source.** An entry is included only if its own text ties the activity to North Korea, a DPRK group (Lazarus, Kimsuky, Andariel, APT37, APT38, APT43, BlueNoroff, TraderTraitor, Famous Chollima, Moonstone Sleet and the like) or a DPRK government body. Hedged attributions ("suspected", "possible link") are kept as written. Entries the source explicitly does not attribute to North Korea were removed.
4. **Every value has a source.** Each row carries the URL it came from and the source's own wording in its `text` column.
5. **Not found means not found.** Empty fields were searched for in later passes (`filled_*` columns). If nothing was published, the result is `not found`, never a guess.

## Collection

1. **Starting sources (8):** lazarus.day (the index plus the reports it links to), CSIS Significant Cyber Incidents (entries containing a North Korea term), EuRepoC, ThaiCERT Threat Group Cards, the Dyadic Cyber Incident Dataset, the CISSM Cyber Events Database (a third-party copy), tayvano's lazarus-bluenoroff-research, and the CFR Cyber Operations Tracker. Details and counts: `SOURCES.md`.
2. **Round 1 searches:** UN Panel of Experts incident tables, the MSMT report, FBI, Justice Department, Treasury and CISA releases, SlowMist, Rekt, a university dataset (Mendeley), Wikipedia, Korean news chronologies and a 2015 CSIS report. Scope was theft and other incidents.
3. **Round 2 searches (all DPRK cyber activity):** all of the UN and MSMT reports, Hackmageddon timelines (2013 to 2026), Korean security companies and government releases, other governments, and about 50 security companies.
4. **Further searches:** governments other than the US and South Korea, crypto investigators and US court filings (CourtListener), more security companies and package-ecosystem research, non-English news, South Korean police, ministry and prosecutor releases, and the Korea Internet & Security Agency's threat-trend reports and white papers.
5. **Sources that block scripts** (EU Council, MSMT, Check Point, Cisco Talos, ClearSky, some vendor blogs, BAE Systems' archived blog, Jamf) were read in an ordinary web browser or with slow, patient requests that kept the site's session cookie. Archived (Wayback Machine) copies were used where the live page was gone, and the copy is cited.
6. **Searching was done by AI agents** that downloaded pages, read them and wrote the entries. For most agents, each quoted `text` was checked by script against the saved page text. Exceptions (for example text read from page summaries or scanned images) are tagged in the row.
7. **Filling empty fields:** four agents looked up the missing country, group and amount for rows from the starting sources and recorded each value with its URL and a quote.

## Rows removed or set aside

- Entries about activity by others that only mention North Korea (for example Iranian, Chinese or pro-Russian hackers), and pages where the author says the hack was not North Korean.
- Notices that only describe readiness, drills or statistics, and GPS jamming (not a cyber intrusion).
- Attacks on North Korea: `attacks-on-north-korea/`.
- Some columns the agents filled by keyword matching, not from the source (country, tags and actors for one set of security-company rows), were cleared. The words remain in each row's `text`.

The list of set-aside rows, with the reason for each, is available on request.

## Merging duplicates

`hacks_all_sources.csv` is never merged. `hacks.csv` folds entries about the same event into one row, and the `deduplicated_row_id` column in `hacks_all_sources.csv` shows where each entry went. In order:

1. Same victim or operation name within about two months (checked by eye).
2. Shared rare words across all rows (candidates listed and read; only clear matches merged).
3. Two rows citing the same page.
4. Agent-proposed groups, one slice per period (2016-17, 2018-19, 2020-21, 2022, 2023, 2024, 2025-26, before 2016, undated). Each proposal was read before being applied, and about 60 weaker links were dropped.

Kept apart on purpose: different victims of the same campaign (for example the seven Andariel indictment victims), different campaigns by the same group, quarterly-report paragraphs, plea and sentencing announcements for related cases, and rows that only share a theme. When unsure, rows were not merged. So duplicates remain, and some events that look separate may be one.

## What the data does not cover

- **No access to some official sources.** The South Korean National Intelligence Service and its National Cyber Security Center refuse connections from outside South Korea. This was respected and not worked around. Their announcements appear only through news reports and joint advisories. The Financial Supervisory Service was down for maintenance when searched.
- **Reports behind sign-up forms** (for example Mandiant's full APT38 and APT43 reports and CrowdStrike's yearly threat reports) were not obtained.
- **Coverage gaps by method:** for several vendors only posts whose address or title named North Korea or a DPRK group were downloaded; posts that mention North Korea only inside the body may be missing. Four 2020 Hackmageddon pages are broken on that site and were read from archive copies. Some pages in 2011 to 2015 timelines exist only as images. Only two of KISA's ten white papers were read.
- **Mixed granularity.** The lists contain single incidents, campaigns, actor profiles, yearly totals, government statements, sanctions notices and court-case stages. They are not separated by type. Quarterly-report paragraphs are separate rows.
- **Amounts are not comparable.** They are in different currencies and dates, sometimes totals over many incidents, and sometimes a ransom demand or an estimate, as the source wrote them.
- **Dates are as written** and may be the publication date of a page, not the date of the event. 163 rows have no readable date.
- **Languages.** Korean, Japanese, Chinese, Russian and other-language text is kept in the original language and not translated.
- **Third-party and self-reported data.** Some sources are one researcher's list (tayvano), a third-party copy of a dataset (CISSM), a keyword filter over a long list (CSIS), or a vendor's own attribution. Their reliability is not assessed here.

## Raw data, corrections and submissions

**Raw downloads.** Everything the entries were read from was saved unchanged (about 7 GB: web pages, PDFs, court filings, datasets, extracted text). It is not in this repository. Every row's `source_url` points to the original, and each row's `text` holds the source's own words, but pages change and disappear, so the saved copy is the record of what was read. We can produce the saved files for any row or source on request: open an issue naming the rows or sources you need.

**What we are looking for.** Contributions are welcome in three forms.

1. **New entries from public sources.** One Markdown file per incident or campaign, as described in `CONTRIBUTING.md`. To be accepted, an entry needs:
   - a public source with a URL, plus an archive link or saved copy of the page;
   - the source's own words in `text`, quoted exactly, naming North Korea or a DPRK group as the actor. The source must make the attribution itself. Do not add your own;
   - dates, amounts, names and countries exactly as the source wrote them. Do not convert currencies, parse amounts or pick between conflicting figures;
   - activity by North Korea, not against it (attacks on North Korea go in `attacks-on-north-korea/`) and not merely mentioning it;
   - for hedged sources, the hedge kept ("suspected", "possible link").
2. **Sources we do not have.** Gaps we know about: the South Korean National Intelligence Service and National Cyber Security Center's own announcements (their sites refuse connections from outside South Korea); the Financial Supervisory Service's press releases; the full Mandiant APT38 and APT43 reports and CrowdStrike's yearly threat reports; KISA's white papers for 2018 to 2023 and 2025; vendor posts that name North Korea only in the body text; and dates for the 163 rows that have none. Material that is lawfully and publicly available from these is especially useful.
3. **Corrections.** A wrong attribution, a wrong merge (name the two `source_entry_id`s), a missing or wrong date, or a quote that does not match its source. Say what the source actually says and give its URL.

Please do not submit material obtained by bypassing a site's access controls, from leaks, or from behind paywalls or sign-ups you do not have rights to. Please do not submit conclusions, rankings or analysis. The lists record what sources published, and the judging is left to whoever uses them.
