import { createHash } from "node:crypto";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const contentRoot = path.join(root, "src", "content");
const collections = ["news", "dossiers"];
const errors = [];

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const target = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(target));
    else if (/\.mdx?$/.test(entry.name)) files.push(target);
  }
  return files;
}

function frontmatterOf(content, file) {
  if (!content.startsWith("---\n")) {
    errors.push(`${file}: Frontmatter fehlt.`);
    return "";
  }
  const end = content.indexOf("\n---", 4);
  if (end === -1) {
    errors.push(`${file}: Frontmatter ist nicht geschlossen.`);
    return "";
  }
  return content.slice(4, end);
}

function scalar(frontmatter, key) {
  const match = frontmatter.match(new RegExp(`^${key}:\\s*(.+?)\\s*$`, "m"));
  if (!match) return undefined;
  const value = match[1].trim();
  if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
    return value.slice(1, -1);
  }
  return value;
}

function bool(frontmatter, key) {
  const value = scalar(frontmatter, key);
  if (value === "true") return true;
  if (value === "false") return false;
  return undefined;
}

function gitBlobSha(content) {
  const body = Buffer.from(content, "utf8");
  return createHash("sha1")
    .update(Buffer.from(`blob ${body.length}\0`, "utf8"))
    .update(body)
    .digest("hex");
}

const records = [];

for (const collection of collections) {
  const dir = path.join(contentRoot, collection);
  for (const file of await walk(dir)) {
    const content = await readFile(file, "utf8");
    const frontmatter = frontmatterOf(content, file);
    const relative = path.relative(root, file).split(path.sep).join("/");
    const record = {
      collection,
      file: relative,
      content,
      blobSha: gitBlobSha(content),
      translationKey: scalar(frontmatter, "translationKey"),
      locale: scalar(frontmatter, "locale"),
      sourceLang: scalar(frontmatter, "sourceLang"),
      translationStatus: scalar(frontmatter, "translationStatus"),
      sourceVersionHash: scalar(frontmatter, "sourceVersionHash"),
      slug: scalar(frontmatter, "slug"),
      draft: bool(frontmatter, "draft")
    };

    for (const field of ["translationKey", "locale", "sourceLang", "translationStatus", "slug"]) {
      if (!record[field]) errors.push(`${relative}: Pflichtfeld ${field} fehlt.`);
    }
    if (record.draft === undefined) errors.push(`${relative}: draft muss explizit true oder false sein.`);
    if (!["de", "en"].includes(record.locale)) errors.push(`${relative}: unbekannte locale ${record.locale}.`);
    if (record.locale && !relative.includes(`/${record.locale}/`)) {
      errors.push(`${relative}: locale stimmt nicht mit dem Sprachverzeichnis überein.`);
    }
    records.push(record);
  }
}

const pairMap = new Map();
const slugMap = new Map();

for (const record of records) {
  const pairKey = `${record.collection}:${record.translationKey}`;
  const pair = pairMap.get(pairKey) ?? new Map();
  if (pair.has(record.locale)) {
    errors.push(`${record.file}: doppelte Sprachfassung für ${pairKey} / ${record.locale}.`);
  }
  pair.set(record.locale, record);
  pairMap.set(pairKey, pair);

  const slugKey = `${record.collection}:${record.locale}:${record.slug}`;
  if (slugMap.has(slugKey)) {
    errors.push(`${record.file}: Slug kollidiert mit ${slugMap.get(slugKey)}.`);
  } else {
    slugMap.set(slugKey, record.file);
  }
}

for (const [pairKey, pair] of pairMap) {
  const de = pair.get("de");
  const en = pair.get("en");
  const hasPublished = [...pair.values()].some((record) => record.draft === false);

  if (hasPublished && (!de || !en)) {
    errors.push(`${pairKey}: veröffentlichte Inhalte benötigen DE und EN.`);
    continue;
  }

  if (de) {
    if (de.sourceLang !== "de") errors.push(`${de.file}: deutsche Referenzfassung muss sourceLang: de verwenden.`);
    if (de.translationStatus !== "source") errors.push(`${de.file}: deutsche Referenzfassung muss translationStatus: source verwenden.`);
  }

  if (en) {
    if (en.sourceLang !== "de") errors.push(`${en.file}: englische Fassung muss sourceLang: de verwenden.`);
    if (!["machine", "reviewed"].includes(en.translationStatus)) {
      errors.push(`${en.file}: translationStatus muss machine oder reviewed sein.`);
    }
    if (hasPublished && !en.sourceVersionHash) {
      errors.push(`${en.file}: sourceVersionHash fehlt.`);
    }
    if (de && en.sourceVersionHash && en.sourceVersionHash !== de.blobSha) {
      errors.push(
        `${en.file}: sourceVersionHash ist veraltet. Erwartet ${de.blobSha}, gefunden ${en.sourceVersionHash}.`
      );
    }
  }

  if (hasPublished && (de?.draft !== false || en?.draft !== false)) {
    errors.push(`${pairKey}: DE und EN müssen gemeinsam veröffentlicht oder gemeinsam als Draft geführt werden.`);
  }
}

if (errors.length > 0) {
  console.error("Content-Konsistenzprüfung fehlgeschlagen:\n");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Content-Konsistenzprüfung erfolgreich: ${records.length} Dateien, ${pairMap.size} Übersetzungspaare.`);
