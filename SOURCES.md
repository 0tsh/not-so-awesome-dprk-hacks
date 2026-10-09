# Sources

Every value in `hacks.csv` and `hacks_all_sources.csv` is copied as the source publishes it. No amounts, dates, or names are converted. The original downloads were saved unchanged and are not in this repository (see `METHODOLOGY.md`).

## Starting sources

| # | Source | Publisher | What was taken | Entries | Coverage | Link |
|---|---|---|---|---|---|---|
| 1 | lazarus.day | lazarus.day | Every incident in its index, with its summary and linked reports | 229 | 2009-07 to 2026-09 | https://lazarus.day/ |
| 2 | CSIS Significant Cyber Incidents | Center for Strategic and International Studies (Strategic Technologies Program) | Entries whose text contains a North Korea search term: North Korea, DPRK, Pyongyang, Lazarus, Kimsuky, and similar | 91 of 1,227 | 2009 to 2026 | https://www.csis.org/programs/strategic-technologies-program/significant-cyber-incidents (PDF dated July 2026) |
| 3 | EuRepoC Global Dataset 1.3 | European Repository of Cyber Incidents (Heidelberg, Innsbruck, Cyber Policy Institute, SWP) | Incidents whose `initiator_country` includes "Korea, Democratic People's Republic of" | 152 of 3,414 | 2000 to 2024 | https://zenodo.org/records/14965395 |
| 4 | Threat Group Cards | ThaiCERT / ETDA (Thailand) | The "operations" list of every threat-group card with country = North Korea (Lazarus, Kimsuky, APT37/Reaper, Moonstone Sleet, Earth Kitsune, Wassonite, unnamed NK groups). Attacks only, see the rule below | 171 kept of 247 | 2007 to 2025-06 | https://apt.etda.or.th/ |
| 5 | Dyadic Cyber Incident Dataset (DCID) v2.0 | Maness, Valeriano, et al. (Harvard Dataverse) | Incidents with `initiator` = 731 (North Korea's state code in the dataset) | 59 of 433 | 2007 to 2020 | https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/CQOMYV |
| 6 | CISSM Cyber Events Database, copy exported 21 Apr 2023, via github.com/holisticinfosec/CISSM-EDA | University of Maryland CISSM (original); re-posted by a third party on GitHub | Events with `actor_country` = "Korea (the Democratic People's Republic of)" | 126 of 10,712 | 2014-11 to 2022-12 | Original: https://cybereventsdatabase.org/ (login required). Copy used: https://github.com/holisticinfosec/CISSM-EDA |
| 7 | lazarus-bluenoroff-research | tayvano (GitHub) | Every row of the "Hacks: By Year" table (date, incident, amount stolen) | 295 | 2016-10 to 2026-09 | https://github.com/tayvano/lazarus-bluenoroff-research |
| 8 | Cyber Operations Tracker | Council on Foreign Relations | Incidents whose "Suspected state sponsor" is "Korea (Democratic People's Republic of)", read from each incident page | 107 of 861 | 2005 to 2026 | https://www.cfr.org/cyber-operations/ |

## Sources added in 2026

Each keeps its own source name in the `source` column of the CSVs. Counts are entries before duplicates were folded.

**First search (theft and other incidents):**
- UN Panel of Experts reports S/2019/691, S/2021/211, S/2023/171 and S/2024/215 (incident annexes)
- the MSMT report of Oct 2025
- FBI, DOJ and Treasury press releases, CISA advisories, and the US–Japan–ROK joint statement of Jan 2025
- the Korean National Police Agency (via The Korea Herald)
- the SlowMist Hacked database and the Rekt News leaderboard (only entries that name the DPRK)
- more tayvano pages
- the Mendeley "Collection of DPRK state-sponsored threat actors' activities" dataset
- Wikipedia
- CSIS's 2015 report appendix
- Seoul Shinmun / Yonhap chronologies (kept in Korean)
- Seoul Economic Daily
- New America (2018)

**Second search (all DPRK cyber activity, not only theft):**
- UN Panel of Experts and MSMT reports (365 rows): reports 2019–2024 (S/2019/171 to S/2024/215, including the full 2023 activity list in Annex 59) and the Oct 2025 MSMT report outside its theft tables
- Hackmageddon timelines (409): 2013–2026, only rows that tie the activity to North Korea
- Korean sources (640): AhnLab ASEC, ESTsecurity, Genians, S2W, the South Korean foreign ministry, press reports of government announcements, and Korean news chronologies (kept in Korean)
- Government releases (146): CISA, FBI/IC3, Treasury OFAC, DOJ (full-text scan of all releases from 2017), the State Department, and the governments of Japan, the UK, Germany, the EU and Australia
- Security companies, group A (160): Microsoft, Google/Mandiant/TAG, CrowdStrike, Recorded Future, Proofpoint, Volexity
- Security companies, group B (411): Kaspersky, ESET, Unit 42, SentinelOne, Symantec, Trend Micro, QiAnXin, Qihoo 360, Socket.dev, ReversingLabs, Fortinet, Zscaler, Elastic, Group-IB, NSFOCUS, Jamf. Its country/tags/actors columns were cleared because they had been filled by keyword-matching, not taken from the source.

**Further searches:**
- Other governments (80): JPCERT/CC, Japan's police and Ministry of Finance, UK (NCSC, OFSI, FCDO), Germany (BfV, BSI), France (ANSSI), the Netherlands, Canada, New Zealand, Australia, Israel, the EU and Singapore. Nothing usable was found for India or Taiwan.
- Court filings and crypto investigators (264): 162 rows from 43 US court dockets on CourtListener (indictments, complaints, forfeitures, sentencing memos, a few private civil suits), plus Elliptic, ZachXBT (public Telegram channel), Chainalysis, SlowMist reports, TRM, Halborn, CertiK, Immunefi and Arkham. Three scanned filings were read by OCR and tagged as such.
- Security companies, group C (229): ReversingLabs, Veracode (hosts the old Phylum blog), CYFIRMA, Socket.dev, Recorded Future (full archive), Malwarebytes/ThreatDown, Hunt.io, Huntress, Validin, Sonatype, Moonlock, NCC Group, Intezer, Aikido, Silent Push, Team Cymru, Gen Digital, Sekoia, Datadog, Checkmarx, Snyk, Mandiant M-Trends 2024 and 2025 and a few others.
- South Korean ministry, prosecutor and agency notices (18): about a specific incident, advisory or attribution: the Ministry of Science and ICT (3.20 results, Interpark, the Dec 2022 IT-worker advisory), the prosecutors' office (the KHNP hack, the code-signing certificate hack, the 27 phishing sites, a gambling-site case tied to North Korean hackers), the Ministry of National Defense (military network hack, the 2024 joint advisory), the Financial Services Commission (the 2023 Kimsuky and sanctions releases), KISA and the Ministry of Unification. 22 more rows from the same search (readiness drills, GPS jamming, ministers' statements) were set aside. fss.or.kr was down for maintenance until about 11 Oct 2026.
- KISA reports (40): the Korea Internet & Security Agency's half-yearly cyber threat trend reports (2021 H2 to 2025 H2) and its 2024 and 2026 white papers: KISA's own investigation of Lazarus zero-day attacks, its analysis of the Operation GoldGoblin watering hole and of 2024 Lazarus malware, and its summaries of incidents reported by others (3CX, Holy Ghost, Bybit, the Phrack leak and more). Each row cites its page in the PDF.
- South Korean National Police Agency press releases (9): police.go.kr, board 1002, naming North Korea as the attacker: the 2022 phishing of reporters and lawmakers' offices, Lazarus's watering-hole attack (Apr 2023), the Seoul National University Hospital hack, Kimsuky (June 2023), the attack on contractors at the US-ROK exercise, the Nov 2023 phishing warning, the 2024 defense-contractor hacks, the 2024 court network hack and the 2019 Upbit theft. Text is from each release's attached PDF. The site needs a session cookie and is very slow, so it was read with a long-timeout script. NIS (nis.go.kr) and NCSC (ncsc.go.kr) refuse connections from outside South Korea and were not read.
- Pages read in Chrome (21): McAfee/Trellix (5), Jamf (7), Hackmageddon's 2020 timelines from Internet Archive copies (5) and BAE Systems' SWIFT-heist research from BAE's old blog (4). The Operation Sharpshooter row was removed because McAfee says the Lazarus links "seem too obvious" to conclude.
- News articles (345): Korean, Japanese, Chinese, Russian and other languages, one row per article, in the original language: Boannews, Seoul Shinmun, Dailysecu, ZDNet Korea, Electronic Times, VOA and RFA Korean, Security NEXT, Nikkei, Tencent, Anquanke, Kommersant and others. Several outlets covering the same event are separate rows.
- Sites that block scripts, read in Chrome (127): the EU Council 2020/1125 Chosun Expo listing (5), MSMT/2026/1 from Sep 2026 (3), the Cisco Talos blog (9), Check Point Research weekly reports and posts (108), and ClearSky (2).

Eight tayvano pages where she says the hack was not the DPRK are left out.

## Notes on individual sources

- **CSIS:** this is a keyword filter. An entry is included because its text contains a North Korea term. Entries that are neither by nor against North Korea (CSIS 90, 93, 94, 107, 852) are removed. Attacks on North Korea (CSIS 388, 605, 640, 899, 1009, 1079) are in `attacks_on_nk.csv`.
- **ThaiCERT, attacks-only rule:** an entry is kept if it describes an attack or attack campaign, meaning someone was targeted, breached, or stolen from. Named "Operation …" entries count. An entry is dropped if it only describes a malware tool, a technique, hacker infrastructure, an actor profile, or a follow-up report adding evidence about an attack already listed. This was a judgment call made by reading each entry.
- **CISSM:** the University of Maryland now requires a login to download. The copy used here was re-posted by someone outside the university and stops at April 2023. Every CISSM row carries this label in the `source` column. CISSM lists one row per victim organization, so a single campaign can appear many times. WannaCry, for example, has about 60 rows.
- **DCID:** the dataset records one row per pair of countries, so a single campaign can appear several times. For example, WannaCry is listed once for the US and once for the UK.
- **CFR:** the filter also picked up a few CFR threat-actor profile pages (Konni Group, Moonstone Sleet, Zinc, Cerium), which are kept as published.
- **tayvano:** the amount column is copied exactly, including values like "$Unknown" and "$0".

## Output files

- **`hacks_all_sources.csv`** is the master list. It has every entry from every source, one row each, with no de-duplication (4,956 rows). The `deduplicated_row_id` column gives the `hacks.csv` row each entry was merged into.
- **`hacks.csv`** has one row per event (2,472 rows). Entries from different sources that describe the same specific event are folded into one row:
  - The main columns come from the first source in this order: lazarus.day, CSIS, EuRepoC, ThaiCERT, DCID, CISSM, tayvano, CFR, then the 2026 sources.
  - Each source's own entry ID, date, name, text and URL are kept in its `<source>_…` columns. Several entries from one source are separated by ` || `.
  - `note` lists every merged entry, plus "multiple dollar figures in text" when the combined texts contain more than one figure.
  - `dollar_figures_as_written` holds every dollar amount that appears in the text, copied as written. Nothing is converted or chosen.
  - `filled_<field>` columns hold values found later for fields that were empty: country, actors, dollar figures, source URL. Each has a `_source_url` and a `_quote` column, and "not found" means nothing was found. Several values are separated by ` || `. The originals are not changed.
- **`attacks_on_nk.csv`** lists attacks where North Korea is the target. These are kept out of the hack lists. It has every entry, one row each, with no de-duplication: CSIS (6), EuRepoC where North Korea is the receiver and not the initiator (6), DCID where North Korea is one of the two states and not the initiator (5), CISSM where the victim country is North Korea (3), CFR where the suspected victims include North Korea and the suspected sponsor is not North Korea (2), and KISA (1).

## Duplicate clean-up

`hacks_all_sources.csv` is never de-duplicated. `hacks.csv` folds entries that describe the same event into one row. How the folds were made, in order:
1. **Name and date matching** (checked by eye): entries with the same victim name or malware/operation name within about two months.
2. **Shared rare words** across all rows (checked by eye): candidates were listed and only clear matches were merged.
3. **Same web page cited** by two rows (checked by eye).
4. **Reviewed proposals by period** (2025–26, 2024, 2023, 2022, 2020–21, 2018–19, 2016–17, up to 2015 plus undated rows): an agent read each slice and proposed groups of rows about the same incident. Every proposal was read before it was applied; weaker links (about 60 rows) were dropped.

What was kept apart on purpose: different victims of the same campaign (for example the seven Andariel indictment victims), different campaigns by the same group, quarterly-report paragraphs, plea and sentencing announcements for related cases, and rows that only share a theme. So some duplicates remain, and a few events that look separate may really be one.

## Checked but not used

- **DeFiLlama hacks list** (https://api.llama.fi/hacks) has 1,293 crypto hacks with amounts but no attacker field. Using it would mean guessing which hacks were North Korea.
- **Chainalysis, TRM Labs, Elliptic** publish yearly totals, not lists of incidents. tayvano's README quotes their totals.
- **MITRE ATT&CK** links only 2 campaigns to North Korean groups.
- **APT Groups and Operations sheet** (Florian Roth) lists operation names without dates.
- **UN Panel of Experts reports** are long PDF reports, left out to keep the scope reasonable.
