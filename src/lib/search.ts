import Fuse from "fuse.js";
import {
  popularSuggestions,
  searchIndex,
  type SearchDocument,
} from "@/data/searchIndex";

const RESULT_LIMIT = 12;

function buildHaystack(doc: SearchDocument): string {
  return [doc.title, doc.description, ...(doc.keywords ?? []), doc.href]
    .join(" ")
    .toLowerCase();
}

const fuse = new Fuse(searchIndex, {
  keys: [
    { name: "title", weight: 0.5 },
    { name: "description", weight: 0.3 },
    { name: "keywords", weight: 0.2 },
  ],
  threshold: 0.4,
  ignoreLocation: true,
  includeScore: true,
  minMatchCharLength: 2,
});

function substringMatches(query: string): SearchDocument[] {
  const terms = query
    .toLowerCase()
    .split(/\s+/)
    .filter((term) => term.length > 0);

  if (terms.length === 0) return [];

  return searchIndex.filter((doc) => {
    const haystack = buildHaystack(doc);
    return terms.every((term) => haystack.includes(term));
  });
}

export function searchSite(query: string): SearchDocument[] {
  const trimmed = query.trim();

  if (!trimmed) {
    return popularSuggestions;
  }

  // Prefer exact substring matches across the full index so any word
  // in titles/descriptions/keywords is findable (not only popular suggestions).
  const exact = substringMatches(trimmed);
  if (exact.length > 0) {
    return exact.slice(0, RESULT_LIMIT);
  }

  // Fuzzy fallback for typos / near matches (reject weak scores)
  return fuse
    .search(trimmed, { limit: RESULT_LIMIT })
    .filter((result) => (result.score ?? 1) <= 0.4)
    .map((result) => result.item);
}

export type { SearchDocument };
