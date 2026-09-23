"use client";

import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, FileText, MapPin, Search, X } from "lucide-react";
import { searchSite, type SearchDocument } from "@/lib/search";
import type { SearchCategory } from "@/data/searchIndex";

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

const CATEGORY_ORDER: SearchCategory[] = [
  "Services",
  "Industries",
  "Locations",
  "Work",
  "Blog",
  "Pages",
];

function groupByCategory(docs: SearchDocument[]) {
  const groups = new Map<SearchCategory, SearchDocument[]>();

  for (const doc of docs) {
    const list = groups.get(doc.category) ?? [];
    list.push(doc);
    groups.set(doc.category, list);
  }

  return CATEGORY_ORDER.filter((cat) => groups.has(cat)).map((cat) => ({
    category: cat,
    items: groups.get(cat)!,
  }));
}

export default function SearchModal({ open, onClose }: SearchModalProps) {
  const router = useRouter();
  const titleId = useId();
  const inputId = useId();
  const listboxId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const trimmedQuery = query.trim();
  const isIdle = trimmedQuery.length === 0;

  const results = useMemo(
    () => (open ? searchSite(query) : []),
    [query, open]
  );

  const grouped = useMemo(() => groupByCategory(results), [results]);
  const hasNoResults = !isIdle && results.length === 0;

  useEffect(() => {
    setActiveIndex(0);
  }, [query, results.length]);

  useEffect(() => {
    if (!open) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      inputRef.current?.focus();
    }, 0);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      previouslyFocused.current?.focus?.();
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      setQuery("");
      setActiveIndex(0);
    }
  }, [open]);

  const navigateTo = useCallback(
    (href: string) => {
      onClose();
      router.push(href);
    },
    [onClose, router]
  );

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      event.preventDefault();
      onClose();
      return;
    }

    if (results.length === 0) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((i) => (i + 1) % results.length);
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((i) => (i - 1 + results.length) % results.length);
      return;
    }

    if (event.key === "Enter") {
      event.preventDefault();
      const selected = results[activeIndex];
      if (selected) {
        navigateTo(selected.href);
      }
    }
  };

  useEffect(() => {
    if (!open) return;

    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleTab = (event: globalThis.KeyboardEvent) => {
      if (event.key !== "Tab") return;
      const focusable = dialog.querySelectorAll<HTMLElement>(
        'button, [href], input, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleTab);
    return () => document.removeEventListener("keydown", handleTab);
  }, [open]);

  if (!open) return null;

  let flatIndex = -1;

  return (
    <div
      className="search-modal-overlay"
      onClick={onClose}
      role="presentation"
    >
      <div
        ref={dialogRef}
        className="search-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        <div className="search-modal-header">
          <h2 id={titleId} className="search-modal-title">
            Search
          </h2>
          <button
            type="button"
            className="search-modal-close"
            onClick={onClose}
            aria-label="Close search"
          >
            <X size={20} />
          </button>
        </div>

        <div className="search-modal-input-wrap">
          <Search size={18} className="search-modal-input-icon" aria-hidden />
          <label htmlFor={inputId} className="sr-only">
            Search the site
          </label>
          <input
            ref={inputRef}
            id={inputId}
            type="search"
            className="search-modal-input"
            placeholder="Search services, blog, work…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            role="combobox"
            aria-expanded="true"
            aria-controls={listboxId}
            aria-autocomplete="list"
            aria-activedescendant={
              results[activeIndex]
                ? `${listboxId}-option-${activeIndex}`
                : undefined
            }
          />
          {query ? (
            <button
              type="button"
              className="search-modal-clear"
              onClick={() => {
                setQuery("");
                inputRef.current?.focus();
              }}
              aria-label="Clear search"
            >
              <X size={16} />
            </button>
          ) : null}
        </div>

        <div className="search-modal-body" id={listboxId} role="listbox">
          {isIdle ? (
            <p className="search-modal-hint">Popular pages and articles</p>
          ) : null}

          {hasNoResults ? (
            <div className="search-modal-empty">
              <FileText size={28} aria-hidden />
              <p>No results for &ldquo;{trimmedQuery}&rdquo;</p>
              <Link
                href="/contact"
                className="btn btn-primary"
                onClick={onClose}
              >
                Contact us instead <ArrowRight size={14} />
              </Link>
            </div>
          ) : (
            grouped.map((group) => (
              <div key={group.category} className="search-modal-group">
                <span className="search-modal-group-title">{group.category}</span>
                <ul className="search-modal-list">
                  {group.items.map((item) => {
                    flatIndex += 1;
                    const index = flatIndex;
                    const isActive = index === activeIndex;

                    return (
                      <li key={item.id} role="presentation">
                        <Link
                          id={`${listboxId}-option-${index}`}
                          href={item.href}
                          role="option"
                          aria-selected={isActive}
                          className={`search-modal-result ${isActive ? "active" : ""}`}
                          onClick={onClose}
                          onMouseEnter={() => setActiveIndex(index)}
                        >
                          <span className="search-modal-result-icon" aria-hidden>
                            {item.category === "Locations" ? (
                              <MapPin size={16} />
                            ) : (
                              <FileText size={16} />
                            )}
                          </span>
                          <span className="search-modal-result-text">
                            <span className="search-modal-result-title">
                              {item.title}
                            </span>
                            <span className="search-modal-result-desc">
                              {item.description}
                            </span>
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
