import { access, readFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const required = [
  "dist/pagefind/pagefind.js",
  "dist/de/suche/index.html",
  "dist/en/search/index.html"
];

const errors = [];

for (const relative of required) {
  try {
    await access(path.join(root, relative));
  } catch {
    errors.push(`${relative}: erwartete Build-Datei fehlt.`);
  }
}

for (const relative of ["dist/de/suche/index.html", "dist/en/search/index.html"]) {
  try {
    const html = await readFile(path.join(root, relative), "utf8");
    if (!html.includes("/pagefind/pagefind.js")) {
      errors.push(`${relative}: Pagefind-Bundle wird nicht referenziert.`);
    }
    if (!html.includes('role="search"')) {
      errors.push(`${relative}: Suchformular ohne role="search".`);
    }
  } catch {
    // Fehlende Datei wurde oben bereits gemeldet.
  }
}

if (errors.length > 0) {
  console.error("Search-Build-Prüfung fehlgeschlagen:\n");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("Search-Build-Prüfung erfolgreich: Pagefind-Bundle und DE/EN-Suchseiten vorhanden.");
