import Fuse from "fuse.js";
import {
  popularSuggestions,
  searchIndex,
  type SearchDocument,
} from "@/data/searchIndex";

const RESULT_LIMIT = 20;

function buildHaystack(doc: SearchDocument): string {
  return [doc.title, doc.description, ...(doc.keywords ?? []), doc.body ?? "", doc.href]
    .join(" ")
    .toLowerCase();
}

function rankScore(doc: SearchDocument, terms: string[]): number {
  const title = doc.title.toLowerCase();
  const description = doc.description.toLowerCase();
  const keywords = (doc.keywords ?? []).join(" ").toLowerCase();
  const body = (doc.body ?? "").toLowerCase();

  let score = 0;
  for (const term of terms) {
    if (title.includes(term)) score += 12;
    if (description.includes(term)) score += 6;
    if (keywords.includes(term)) score += 4;
    if (body.includes(term)) score += 2;
  }
  return score;
}

const fuse = new Fuse(searchIndex, {
  keys: [
    { name: "title", weight: 0.4 },
    { name: "description", weight: 0.25 },
    { name: "keywords", weight: 0.15 },
    { name: "body", weight: 0.2 },
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

  return searchIndex
    .filter((doc) => {
      const haystack = buildHaystack(doc);
      return terms.every((term) => haystack.includes(term));
    })
    .sort((a, b) => rankScore(b, terms) - rankScore(a, terms));
}

export function searchSite(query: string): SearchDocument[] {
  const trimmed = query.trim();

  if (!trimmed) {
    return popularSuggestions;
  }

  const exact = substringMatches(trimmed);
  if (exact.length > 0) {
    return exact.slice(0, RESULT_LIMIT);
  }

  return fuse
    .search(trimmed, { limit: RESULT_LIMIT })
    .filter((result) => (result.score ?? 1) <= 0.4)
    .map((result) => result.item);
}

export type { SearchDocument };
