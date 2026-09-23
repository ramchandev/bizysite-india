import Fuse from "fuse.js";
import {
  popularSuggestions,
  searchIndex,
  type SearchDocument,
} from "@/data/searchIndex";

const RESULT_LIMIT = 12;

const fuse = new Fuse(searchIndex, {
  keys: [
    { name: "title", weight: 0.5 },
    { name: "description", weight: 0.3 },
    { name: "keywords", weight: 0.2 },
  ],
  threshold: 0.35,
  ignoreLocation: true,
  includeScore: true,
  minMatchCharLength: 2,
});

export function searchSite(query: string): SearchDocument[] {
  const trimmed = query.trim();

  if (!trimmed) {
    return popularSuggestions;
  }

  return fuse
    .search(trimmed, { limit: RESULT_LIMIT })
    .map((result) => result.item);
}

export type { SearchDocument };
