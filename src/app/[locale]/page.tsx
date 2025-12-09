import Link from 'next/link';
import { sections } from '@/data/entries';

const heroCards = [
  { href: '/it/guide/musei', title: 'Musei', body: 'Mappe e schede dei musei imperdibili.' },
  {
    href: '/it/guide/registri-storici',
    title: 'Registri storici',
    body: 'Riferimenti FMI/ASI e registri riconosciuti.',
  },
  {
    href: '/it/guide/restauratori-rivenditori',
    title: 'Restauratori & rivenditori',
    body: 'Laboratori e rivenditori specializzati.',
  },
  { href: '/it/guide/ricambisti', title: 'Ricambisti', body: 'Cataloghi e ricambi per modelli storici.' },
  {
    href: '/it/guide/specialisti-componenti',
    title: 'Specialisti componenti',
    body: 'Esperti di freni, sospensioni e parti speciali.',
  },
  { href: '/it/gruppi', title: 'Gruppi / Club', body: 'Community e club selezionati.' },
];

export default function HomePage() {
  return (
    <div className="space-y-24">
      <section className="bg-gradient-to-b from-transparent to-black/5 px-6 pb-16 pt-8 dark:to-white/5">
        <div className="section-container space-y-6 text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-accent/30 bg-white/60 px-4 py-2 text-xs uppercase tracking-[0.2em] shadow-soft dark:bg-neutral-900/60">
            <span>Directory map-first</span>
            <span className="h-2 w-2 rounded-full bg-primary" aria-hidden />
            <span>5 lingue</span>
          </div>
          <div className="space-y-4">
            <h1 className="font-serif text-4xl md:text-5xl">Senza centralina</h1>
            <p className="mx-auto max-w-3xl text-lg text-neutral-700 dark:text-neutral-300">
              Guide aggiornate a musei, registri, professionisti e club delle moto d’epoca. Layout map-first, dark/light,
              e contenuti editoriali pronti per Sanity.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <Link href="/it/guide/musei" className="rounded-full bg-primary px-4 py-2 text-white shadow-soft">
              Esplora musei
            </Link>
            <Link
              href="/it/blog"
              className="rounded-full border border-accent/40 px-4 py-2 text-neutral-900 shadow-soft dark:text-white"
            >
              Vai al blog
            </Link>
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">Guide</p>
            <h2 className="font-serif text-3xl">6 card di accesso rapido</h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {heroCards.map((card) => (
            <Link key={card.href} href={card.href} className="card-surface p-4">
              <p className="text-sm text-neutral-500">{card.href}</p>
              <h3 className="font-serif text-2xl">{card.title}</h3>
              <p className="text-subtle">{card.body}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-container">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">Eventi</p>
            <h2 className="font-serif text-3xl">Calendario (coming soon)</h2>
          </div>
          <a
            href="mailto:ciao@stanzameta.example.com?subject=Segnalazione%20evento%20Senza%20centralina"
            className="rounded-full border border-accent/40 px-4 py-2 text-sm"
          >
            Segnala evento
          </a>
        </div>
        <div className="card-surface p-6 text-subtle">Nessun evento pubblicato. Segnala il tuo tramite email.</div>
      </section>

      <section className="section-container">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">Blog</p>
            <h2 className="font-serif text-3xl">Ultimi articoli</h2>
          </div>
          <Link href="/it/blog" className="text-sm underline">
            Tutti gli articoli
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((id) => (
            <div key={id} className="card-surface space-y-2 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">Placeholder</p>
              <h3 className="font-serif text-xl">Titolo articolo {id}</h3>
              <p className="text-subtle">Testo di anteprima in lavorazione.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-container">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">Struttura dati</p>
            <h2 className="font-serif text-3xl">Pronta per Sanity (mock data)</h2>
            <p className="text-subtle">Le sezioni disponibili: {Object.values(sections).map((s) => s.label).join(', ')}.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
