# Senza centralina — Product Requirements (MVP)

## 1. Overview
- **Nome progetto:** Senza centralina (brand provvisorio)
- **Tipo prodotto:** Sito "vetrina" multi-pagina + guida/directory + blog
- **Obiettivo:** Riproporre e aggiornare "Guida alle moto d’epoca" in formato web con mappe interattive, schede dedicate e contenuti editoriali
- **Hosting:** Vercel
- **Lingue:** IT, EN, ES, ZH, JA (stessi contenuti tradotti)

## 2. Obiettivi business
- Divulgazione e guida aggiornata per appassionati di moto d’epoca
- Community (directory gruppi/club)
- Lead indiretti tramite presenza di servizi (restauri, rivenditori, ricambisti, specialisti)
- Enfatizzare musei (Italia + estero) e registri storici (FMI/ASI)

## 3. Target utenti
- Collezionisti esperti
- Appassionati
- Turisti italiani e stranieri
- Club
- Meccanici / restauratori / rivenditori

## 4. Scope funzionale (MVP)
### 4.1 Sezioni principali
Home; Guide (Mappe + Liste); Musei; Registri storici (FMI/ASI); Restauratori & rivenditori / meccanici esperti; Ricambisti (generali + per marca); Specialisti componenti; Risorse consigliate (altri siti); Gruppi / Club; Blog.

### 4.2 Directory "map-first"
- Layout map-first (mappa primaria + lista/tabella laterale)
- Ricerca rapida (nome/città/paese-regione)
- Ordinamento A–Z minimo (Z–A opzionale)
- Nessuna geolocalizzazione
- Pin card compatta con azioni rapide
- Ogni elemento ha pagina dettaglio dedicata
- Campo visibile: Paese/Regione sempre in lista

### 4.3 Pagina dettaglio entry
- Titolo + location
- Badge categoria
- Data "Ultimo aggiornamento"
- Azioni rapide: Sito / Email / Indicazioni / Telefono (se presenti)
- Sezione "Info" con campi standard
- Mini-mappa del punto
- Correlati (stessa categoria/paese)
- Segnala modifica via mailto precompilata

### 4.4 Blog
- Pubblicazione da browser (CMS)
- Nessuna categoria (tag opzionali in futuro)
- Articoli collegabili a entry della directory (relazioni)

### 4.5 Admin panel
- Must-have: CRUD entry e post; Import Excel/CSV; Gestione traduzioni (5 lingue); Draft / Publish; Preview contenuti

## 5. Contenuti e dati
- Volume per sezione: ≤ ~30 entries (MVP)
- Fonte iniziale: Excel
- Contenuti iniziali: placeholder accettati, da rifinire dopo

## 6. UX/UI direction
### 6.1 Mood & stile
- "Contemporary club": stile inglese/heritage ma pulito e moderno
- No foto (MVP): focus su tipografia, layout, mappe, icone
- UI minimal, spacing generoso, tipografia grande
- Dark/Light mode

### 6.2 Navigazione
- Header premium trasparente che diventa solido allo scroll
- Menu principale: Home, Guide (mega-menu), Blog, Gruppi, Risorse
- Mega-menu "Guide" con 3 colonne link + colonna "In evidenza"

### 6.3 Pattern map-first (desktop)
- Split 60/40 (mappa/lista)
- Mappa sticky su desktop
- Lista stile B1 (righe compatte) con stati hover/active
- Sincronizzazione pin↔riga: click riga → seleziona pin + apre pin-card; click pin → seleziona riga + scroll della lista

### 6.4 Micro-interazioni
- Hover card/lista: lift leggero + highlight bordo
- Pin active: highlight/pulse minimale
- Skeleton loading su lista / mappa lazy-load
- Rispetto prefers-reduced-motion

## 7. Design system (alto livello)
- **Palette:** Background avorio/pergamena; Text carbone; Primary verde bottiglia (CTA/stati attivi); Accent ottone (bordi/focus/dettagli)
- **Tipografia:** Titoli serif editoriale, UI/body sans leggibile
- **Componenti:** modulari, radius 12–16px, bordi sottili 1px, ombre soft, glass leggero solo su toolbar/panel mappa (se utile)

## 8. Accessibilità & SEO
- Accessibilità: contrasto verificato, focus visibile, navigazione tastiera completa (lista fruibile senza mappa), rispetto reduce motion
- SEO: URL pulite (es. /guide/musei/[slug]); hreflang per 5 lingue + canonical; sitemap automatica; structured data (Place/Organization/LocalBusiness per entry, BlogPosting per blog)

## 9. Tech stack
- Frontend: Next.js (App Router) + TypeScript
- UI: Tailwind + shadcn/ui
- i18n: next-intl
- Mappe: Mapbox (premium)
- CMS/Admin: Sanity (traduzioni, preview, draft/publish, import)

## 10. Deliverables MVP
- Header premium + mega-menu
- Home con sezioni: Hero, 6 card, Eventi (empty), Blog (placeholder)
- Guida Musei map-first completa (mappa + lista + dettaglio)
- Template riutilizzabile per le altre Guide
- Integrazione CMS (Sanity) successiva alla validazione UI/UX

## 11. Out of scope (per ora)
- Filtri avanzati per directory (oltre search + A–Z)
- Geolocalizzazione "vicino a me"
- Newsletter, preventivi, form partner (rimandati)
- Area utenti/login
