// Checks every event file: front matter present, required fields, a source URL and text for each
// entry, ids match filenames and are unique. Run on every pull request: node .github/scripts/validate.mjs (needs the `yaml` package).
import fs from 'node:fs';
import path from 'node:path';
import YAML from 'yaml';
import { fileURLToPath } from 'node:url';
const here = path.dirname(fileURLToPath(import.meta.url));

const dirs = { 'events': 'event', 'attacks-on-north-korea': 'attack' };
// These imported entries had no URL in their source dataset; new entries must have one.
const noUrlOk = new Set(fs.readFileSync(path.join(here, 'validate-allow-no-url.txt'), 'utf8').split(/\s+/));
const errors = []; const ids = new Set(); let n = 0;
for (const [dir, kind] of Object.entries(dirs)) {
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.md'))) {
    n++;
    const where = `${dir}/${f}`;
    const m = fs.readFileSync(where, 'utf8').match(/^---\n([\s\S]*?)\n---/);
    if (!m) { errors.push(`${where}: no front matter`); continue; }
    let d; try { d = YAML.parse(m[1]); } catch (e) { errors.push(`${where}: bad YAML (${e.message})`); continue; }
    if (d.id !== f.replace(/\.md$/, '')) errors.push(`${where}: id "${d.id}" must equal the filename`);
    if (ids.has(d.id)) errors.push(`${where}: duplicate id`); ids.add(d.id);
    if (!d.title) errors.push(`${where}: title missing`);
    if (d.year !== 'undated' && !Number.isInteger(d.year)) errors.push(`${where}: year must be a number or "undated"`);
    if (kind === 'event') {
      if (!Array.isArray(d.entries) || !d.entries.length) errors.push(`${where}: needs at least one entry`);
      for (const [i, e] of (d.entries ?? []).entries()) {
        if (!e.source) errors.push(`${where}: entries[${i}].source missing`);
        if (!e.text) errors.push(`${where}: entries[${i}].text (the source's own words) missing`);
        if (!noUrlOk.has(d.id) && !(e.urls ?? []).some((u) => /^https?:\/\//.test(u))) errors.push(`${where}: entries[${i}].urls needs a source URL`);
      }
    } else if (!(d.urls ?? []).some((u) => /^https?:\/\//.test(u))) errors.push(`${where}: urls needs a source URL`);
  }
}
if (errors.length) { console.error(errors.slice(0, 50).join('\n')); console.error(`${errors.length} problem(s)`); process.exit(1); }
console.log(`ok: ${n} files`);
