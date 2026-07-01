// ============================================================
// Récupère des flux RSS de presse anglophone fiable (Guardian, BBC, NYT)
// et génère actualites/news.json : {title, summary (<=80 mots), source, url, date}
// Aucune clé API nécessaire (flux RSS publics). Exécuté quotidiennement
// par .github/workflows/update-news.yml
// ============================================================
import Parser from "rss-parser";
import { writeFileSync } from "fs";

const FEEDS = [
  { url: "https://www.theguardian.com/world/rss", source: "The Guardian" },
  { url: "https://www.theguardian.com/uk-news/rss", source: "The Guardian" },
  { url: "https://feeds.bbci.co.uk/news/world/rss.xml", source: "BBC News" },
  { url: "https://rss.nytimes.com/services/xml/rss/nyt/World.xml", source: "The New York Times" },
  { url: "https://rss.nytimes.com/services/xml/rss/nyt/US.xml", source: "The New York Times" }
];

const MAX_ITEMS_PER_FEED = 6;
const MAX_TOTAL = 20;
const MAX_WORDS = 80;

function stripHtml(html) {
  return (html || "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function truncateWords(text, max) {
  const words = text.split(/\s+/);
  if (words.length <= max) return text;
  return words.slice(0, max).join(" ") + "…";
}

async function main() {
  const parser = new Parser({ timeout: 15000 });
  const items = [];

  for (const feed of FEEDS) {
    try {
      const parsed = await parser.parseURL(feed.url);
      const entries = (parsed.items || []).slice(0, MAX_ITEMS_PER_FEED);
      entries.forEach(entry => {
        const summarySource = entry.contentSnippet || entry.content || entry.summary || "";
        const summary = truncateWords(stripHtml(summarySource), MAX_WORDS);
        if (!entry.title || !summary) return;
        items.push({
          title: entry.title.trim(),
          summary,
          source: feed.source,
          url: entry.link,
          date: entry.isoDate || entry.pubDate || new Date().toISOString()
        });
      });
    } catch (err) {
      console.error(`Erreur sur le flux ${feed.url}:`, err.message);
    }
  }

  items.sort((a, b) => new Date(b.date) - new Date(a.date));
  const deduped = [];
  const seenTitles = new Set();
  for (const item of items) {
    if (seenTitles.has(item.title)) continue;
    seenTitles.add(item.title);
    deduped.push(item);
    if (deduped.length >= MAX_TOTAL) break;
  }

  const output = {
    generatedAt: new Date().toISOString(),
    items: deduped
  };

  writeFileSync(new URL("../actualites/news.json", import.meta.url), JSON.stringify(output, null, 2));
  console.log(`news.json généré avec ${deduped.length} articles.`);
}

main();
