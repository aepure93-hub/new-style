'use client';

import { useMemo, useState } from 'react';
import type { Entry, SectionKey } from '@/data/entries';
import Link from 'next/link';

interface Props {
  items: Entry[];
  section: SectionKey;
}

const sorters = {
  az: (a: Entry, b: Entry) => a.title.localeCompare(b.title),
  za: (a: Entry, b: Entry) => b.title.localeCompare(a.title),
};

export function GuideExplorer({ items, section }: Props) {
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState<'az' | 'za'>('az');
  const [active, setActive] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    const results = items
      .filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.city.toLowerCase().includes(q) ||
          item.countryRegion.toLowerCase().includes(q),
      )
      .sort(sorters[sort]);
    return results;
  }, [items, query, sort]);

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="card-surface sticky top-28 h-fit p-4 lg:order-2">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">Mappa</p>
            <p className="text-subtle">Pins sincronizzati con la lista.</p>
          </div>
          <span className="rounded-full bg-primary px-3 py-1 text-xs text-white">Mock</span>
        </div>
        <div className="mt-4 h-80 rounded-xl border border-accent/20 bg-gradient-to-br from-emerald-50 to-amber-50 dark:from-neutral-800 dark:to-neutral-900" role="presentation">
          <p className="p-4 text-subtle">Placeholder Mapbox: in produzione caricherà la mappa reale.</p>
          {active && (
            <div className="mx-4 rounded-xl border border-accent/30 bg-white/80 p-3 shadow-soft dark:bg-neutral-900/80">
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">Pin selezionato</p>
              <p className="font-semibold">{active}</p>
              <p className="text-subtle">Card compatta con CTA rapide.</p>
            </div>
          )}
        </div>
      </div>

      <div className="card-surface p-4 lg:order-1">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">Lista</p>
            <p className="text-subtle">Search + sort A–Z / Z–A</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <input
              type="search"
              placeholder="Cerca per nome, città, regione"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="rounded-lg border border-accent/40 bg-white/70 px-3 py-2 text-sm shadow-soft dark:bg-neutral-900/70"
            />
            <label className="text-sm">
              Ordina
              <select
                className="ml-2 rounded-lg border border-accent/40 bg-white/70 px-2 py-1 text-sm shadow-soft dark:bg-neutral-900/70"
                value={sort}
                onChange={(e) => setSort(e.target.value as 'az' | 'za')}
              >
                <option value="az">A–Z</option>
                <option value="za">Z–A</option>
              </select>
            </label>
            <span className="text-subtle">{filtered.length} risultati</span>
          </div>
        </div>
        <ul className="mt-4 divide-y divide-accent/10" role="list">
          {filtered.map((item) => (
            <li key={item.slug}>
              <button
                type="button"
                className={`flex w-full flex-col items-start gap-1 rounded-lg px-2 py-3 text-left transition hover:bg-black/5 focus-visible:outline focus-visible:outline-accent dark:hover:bg-white/10 ${
                  active === item.title ? 'border border-primary/40 shadow-soft' : ''
                }`}
                onClick={() => setActive(item.title)}
              >
                <div className="flex w-full flex-wrap items-center justify-between gap-2">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">{item.countryRegion}</p>
                    <h3 className="font-serif text-xl">{item.title}</h3>
                  </div>
                  <span className="rounded-full bg-primary px-2 py-1 text-xs text-white">{section}</span>
                </div>
                <p className="text-subtle">{item.city}</p>
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  {item.website && (
                    <a className="underline" href={item.website} target="_blank" rel="noreferrer">
                      Sito
                    </a>
                  )}
                  {item.email && (
                    <a className="underline" href={`mailto:${item.email}`}>
                      Email
                    </a>
                  )}
                  {item.phone && <span className="text-subtle">{item.phone}</span>}
                </div>
                <Link href={`/it/guide/${section}/${item.slug}`} className="text-sm underline">
                  Vai al dettaglio
                </Link>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
