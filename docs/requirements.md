# requirements.md — Senza centralina (MVP)

## 0. Contesto
- **Prodotto:** sito multi-pagina "vetrina" + directory (mappe + liste) + blog
- **Brand:** "Senza centralina" (provvisorio)
- **Hosting:** Vercel
- **Lingue:** it, en, es, zh, ja
- **Stack:** Next.js (App Router) + TypeScript + Tailwind + shadcn/ui + next-intl + next-themes + Mapbox + Sanity

## 1. Obiettivi e KPI (MVP)
### Obiettivi
- Offrire una guida navigabile per musei (Italia + estero), registri storici (FMI/ASI), restauratori/rivenditori, ricambisti, specialisti componenti, gruppi/club.
- Avere un blog pubblicabile da browser (single author).
- Avere un admin panel con traduzioni e import da Excel/CSV.

### KPI (indicativi)
- LCP su Home e pagine directory < 2.5s (connessione "buona").
- Lighthouse: Performance ≥ 85, Accessibility ≥ 90 (target).
- Tasso di navigazione Guide → Dettaglio (misurabile via analytics più avanti).

## 2. Information Architecture (IA)
### Rotte (con locale prefix)
Tutte le rotte sono sotto `/{locale}` via middleware i18n.
- `/{locale}/` Home
- `/{locale}/guide/musei` + `/{locale}/guide/musei/{slug}`
- `/{locale}/guide/registri-storici` + `/{locale}/guide/registri-storici/{slug}`
- `/{locale}/guide/restauratori-rivenditori` + `/{locale}/guide/restauratori-rivenditori/{slug}`
- `/{locale}/guide/ricambisti` + `/{locale}/guide/ricambisti/{slug}`
- `/{locale}/guide/specialisti-componenti` + `/{locale}/guide/specialisti-componenti/{slug}`
- `/{locale}/blog` + `/{locale}/blog/{slug}`
- `/{locale}/gruppi` + `/{locale}/gruppi/{slug}`
- `/{locale}/risorse-consigliate`
- (footer) `/{locale}/contatti`, `/{locale}/privacy`, `/{locale}/cookie`

## 3. Requisiti UI/UX (Design & Interaction)
### 3.1 Stile
- Direzione: Contemporary club (heritage pulito, moderno, tipografico).
- Nessuna immagine richiesta per MVP (supporto futuro).
- Light/Dark mode obbligatori.

### 3.2 Header (global)
Header trasparente top pagina → diventa solido dopo scroll ~32px.
- Include: wordmark "Senza centralina"; nav Home, Guide (mega-menu), Blog, Gruppi, Risorse; azioni Search (command), Language switcher, Theme toggle.
- Mega-menu Guide: 3 colonne link principali + 1 colonna "In evidenza" (placeholder ok).

**Acceptance criteria**
- Trasparente in top e solido dopo scroll (no layout shift).
- Navigabile da tastiera, focus visibile.
- Funziona su mobile con menu accessibile (drawer/accordion) (MVP: può essere semplice).

### 3.3 Pagine directory "Guide" (map-first)
- Layout desktop: split 60/40 (mappa/lista).
- Mappa sticky su desktop.
- Lista stile B1: righe compatte con colonne.
- Toolbar sticky nella lista: search input (nome/città/paese-regione), sort A–Z e Z–A, contatore risultati.
- No geolocalizzazione.
- Pin click: card compatta con CTA rapide.
- Lista e mappa sincronizzate (selezione reciproca).
- Mobile: layout adattivo (tab/toggle Mappa/Lista o mappa sopra lista).

**Acceptance criteria**
- Search filtra correttamente su name/city/countryRegion.
- Ordinamento A–Z / Z–A corretto e stabile.
- Click riga seleziona pin e apre pin-card.
- Click pin seleziona riga e la porta in viewport (se possibile).
- Mappa lazy-load o non degrada performance su mobile.
- Accessibile: lista fruibile senza usare la mappa.

### 3.4 Pagina dettaglio entry (tutte le directory)
- Breadcrumb.
- Titolo + location.
- Badge categoria.
- Campo visibile: Ultimo aggiornamento (data).
- CTA: website/email/telefono/indicazioni (se presenti).
- Mini-mappa punto.
- "Correlati" (placeholder ok).
- "Segnala modifica" via mailto precompilata con slug e nome.

**Acceptance criteria**
- Mostra "Aggiornato il …".
- mailto precompilata contiene oggetto con slug e nome.
- CTA presenti solo se dato esiste.
- URL stabile e SEO-friendly.

### 3.5 Home
Sezioni: Hero (titolo + sottotitolo + CTA); 6 card (guide + gruppi); Eventi (empty state con mailto); Blog (3 placeholder + link a /blog).

**Acceptance criteria**
- 6 card linkano alle pagine target.
- Sezione eventi gestisce empty state.
- Blog placeholder visibile e coerente.

### 3.6 Blog (MVP)
- Listing pagina /blog (può essere placeholder all’inizio).
- Articolo /blog/{slug} (placeholder).
- Relazione: un articolo può linkare entry correlate (future enhancement; MVP: struttura dati pronta).

**Acceptance criteria**
- Rotte presenti e navigabili.
- Layout testo leggibile (max width, line-height).
- Struttura pronta per collegamenti a entry (anche senza UI avanzata).

## 4. Requisiti dati (Data model)
### 4.1 Entità principali
**Entry** (usata per musei, registri, professionisti, ricambisti, specialisti, gruppi)
- section: enum
- title: localized string (it/en/es/zh/ja)
- slug: slug (source title.it)
- countryRegion: localized string
- city: string
- website: url (optional)
- email: string (optional)
- phone: string (optional)
- coordinates: geopoint (lat/lng)
- updatedAt: datetime
- description (opzionale): localized text

**BlogPost**
- title: localized string
- slug
- excerpt: localized text
- body: localized rich text
- updatedAt: datetime
- relatedEntries: references[] (Entry)

**Resource** (risorse consigliate)
- title: localized string
- url
- description: localized text
- updatedAt

### 4.2 Multilingua
- Stesso contenuto replicato in 5 lingue.
- Traduzioni gestite da CMS (Sanity).

**Acceptance criteria**
- Ogni field localizzato è disponibile per tutte le lingue (anche vuoto).
- UI non rompe se una traduzione manca (fallback configurabile: it).

## 5. Admin / CMS (Sanity)
### Requisiti
- CRUD su Entry, BlogPost, Resource.
- Draft / publish.
- Preview.
- Import CSV/Excel (workflow definito; anche manuale MVP).

**Acceptance criteria**
- Studio accessibile e funzionante.
- Schema include localizzazione 5 lingue.
- Possibile creare/modificare entry con coordinate e updatedAt.
- Preview/draft configurati (anche minimo).

## 6. Requisiti tecnici
### 6.1 Performance
- Mapbox caricato solo sulle pagine che lo richiedono.
- Lazy load su mobile consigliato.
- Evitare re-render pesanti: memoization e split client/server.

### 6.2 Accessibilità
- Focus ring visibile.
- Keyboard navigation per menu e lista.
- Respect prefers-reduced-motion.

### 6.3 SEO
- hreflang per 5 lingue.
- canonical.
- sitemap (può essere in milestone successiva).
- metadata base (title/description).

## 7. Non-requisiti (Out of scope MVP)
- Filtri avanzati (oltre search + sort).
- Geolocalizzazione "vicino a me".
- Newsletter / preventivi / area utenti.
- Moderazione community / login.
- Eventi con CRUD completo (solo placeholder).

## 8. Milestones (implementazione)
- **M1 — UI Core (mock data):** Header premium + mega-menu + search/lang/theme; Home (hero + 6 card + eventi empty + blog placeholder); /guide/musei map-first con mock data; /guide/musei/{slug} dettaglio con updatedAt + mailto.
- **M2 — Estensione template (mock):** Stesse pagine per tutte le sezioni guide (riuso template); /risorse-consigliate, /gruppi, /blog placeholder.
- **M3 — Integrazione Sanity:** Setup studio + schema; fetch entry per sezione; fetch dettaglio entry; fetch blog + relazioni; preview/draft.
- **M4 — Hardening:** i18n completo (test rotte); Accessibilità (audit); Performance (audit); SEO base + sitemap.

## 9. Definition of Done (MVP)
- Tutte le rotte principali presenti e navigabili (5 lingue).
- Musei map-first completa (mappa + lista + dettaglio).
- Header premium e dark/light funzionanti.
- CMS pronto e collegabile (o già collegato in M3).
- Niente errori runtime, UI stabile su mobile/desktop.
