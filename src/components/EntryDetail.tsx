import { Entry, sections } from '@/data/entries';
import Link from 'next/link';

interface Props {
  entry: Entry;
}

export function EntryDetail({ entry }: Props) {
  const section = sections[entry.section];
  const mailSubject = encodeURIComponent(`Segnala modifica: ${entry.slug} — ${entry.title}`);
  const mailBody = encodeURIComponent(`Ciao, vorrei segnalare una modifica per ${entry.title} (${entry.slug}).`);

  return (
    <article className="section-container">
      <nav className="text-sm text-subtle" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2">
          <li>
            <Link href="/it">Home</Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <Link href={`/it/guide/${entry.section}`}>{section.label}</Link>
          </li>
          <li aria-hidden>/</li>
          <li aria-current="page" className="text-neutral-900 dark:text-white">
            {entry.title}
          </li>
        </ol>
      </nav>
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">{section.label}</p>
        <h1 className="font-serif text-4xl">{entry.title}</h1>
        <p className="text-subtle">{entry.city} · {entry.countryRegion}</p>
        <span className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs text-white">
          Aggiornato il {entry.updatedAt}
        </span>
      </div>

      <div className="card-surface grid gap-4 p-4 md:grid-cols-2">
        <div className="space-y-3">
          <h2 className="font-serif text-2xl">Info</h2>
          <p className="text-subtle">{entry.description ?? 'Descrizione in arrivo.'}</p>
          <div className="flex flex-wrap gap-2 text-sm">
            {entry.website && (
              <a className="rounded-full bg-primary px-3 py-2 text-white" href={entry.website} target="_blank" rel="noreferrer">
                Sito web
              </a>
            )}
            {entry.email && (
              <a className="rounded-full border border-accent/40 px-3 py-2" href={`mailto:${entry.email}`}>
                Email
              </a>
            )}
            {entry.phone && <span className="rounded-full border border-accent/40 px-3 py-2">{entry.phone}</span>}
            {entry.coordinates && (
              <a
                className="rounded-full border border-accent/40 px-3 py-2"
                href={`https://www.google.com/maps/search/?api=1&query=${entry.coordinates.lat},${entry.coordinates.lng}`}
                target="_blank"
                rel="noreferrer"
              >
                Indicazioni
              </a>
            )}
          </div>
        </div>
        <div className="space-y-3">
          <h2 className="font-serif text-2xl">Mini-mappa</h2>
          <div className="h-48 rounded-xl border border-accent/20 bg-gradient-to-br from-emerald-50 to-amber-50 dark:from-neutral-800 dark:to-neutral-900" role="presentation">
            <p className="p-3 text-subtle">Placeholder mappa puntuale.</p>
          </div>
          <div className="rounded-xl bg-black/5 p-3 text-sm dark:bg-white/10">
            <p className="font-semibold">Segnala modifica</p>
            <a className="text-primary underline" href={`mailto:ciao@senza.example.com?subject=${mailSubject}&body=${mailBody}`}>
              ciao@senza.example.com
            </a>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="font-serif text-2xl">Correlati</h2>
        <p className="text-subtle">Placeholder in attesa di logica correlati.</p>
      </div>
    </article>
  );
}
