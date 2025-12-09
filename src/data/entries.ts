export type SectionKey =
  | 'musei'
  | 'registri-storici'
  | 'restauratori-rivenditori'
  | 'ricambisti'
  | 'specialisti-componenti'
  | 'gruppi';

export interface Entry {
  section: SectionKey;
  title: string;
  slug: string;
  countryRegion: string;
  city: string;
  website?: string;
  email?: string;
  phone?: string;
  coordinates?: { lat: number; lng: number };
  updatedAt: string;
  description?: string;
}

export const entries: Entry[] = [
  {
    section: 'musei',
    title: 'Museo Storico Alfa Romeo',
    slug: 'museo-storico-alfa-romeo',
    countryRegion: 'Italia / Lombardia',
    city: 'Arese',
    website: 'https://www.museoalfaromeo.com',
    phone: '+39 02 44425511',
    coordinates: { lat: 45.5554, lng: 9.0804 },
    updatedAt: '2024-11-05',
    description:
      'Collezione storica con modelli iconici Alfa Romeo, centro documentazione e percorsi guidati.',
  },
  {
    section: 'musei',
    title: 'Museo Ducati',
    slug: 'museo-ducati',
    countryRegion: 'Italia / Emilia-Romagna',
    city: 'Bologna',
    website: 'https://www.ducati.com/it/it/storia/museo-ducati',
    email: 'info@ducati.com',
    coordinates: { lat: 44.5033, lng: 11.1906 },
    updatedAt: '2024-10-12',
    description: 'Percorso immersivo sulla storia Ducati con fabbrica visitabile e archivi digitali.',
  },
  {
    section: 'registri-storici',
    title: 'Registro Storico FMI',
    slug: 'registro-storico-fmi',
    countryRegion: 'Italia',
    city: 'Roma',
    website: 'https://www.federmoto.it/registro-storico/',
    email: 'registro@federmoto.it',
    updatedAt: '2024-09-20',
    description: 'Riferimento per iscrizioni e certificazioni di storicità, supporto pratiche FMI.',
  },
  {
    section: 'registri-storici',
    title: 'ASI Registro Storico',
    slug: 'asi-registro-storico',
    countryRegion: 'Italia',
    city: 'Torino',
    website: 'https://www.asifed.it/registro-storico',
    updatedAt: '2024-08-08',
    description: 'Certificazioni di rilevanza storica e tecnica con rete di club affiliati.',
  },
  {
    section: 'restauratori-rivenditori',
    title: 'Officina D’Epoca',
    slug: 'officina-depoca',
    countryRegion: 'Italia / Piemonte',
    city: 'Torino',
    phone: '+39 011 000000',
    updatedAt: '2024-07-01',
    description: 'Restauri completi e consulenza acquisto per moto classiche europee.',
  },
  {
    section: 'ricambisti',
    title: 'Classic Parts Europe',
    slug: 'classic-parts-europe',
    countryRegion: 'Germania / Baviera',
    city: 'Monaco',
    website: 'https://classicparts.example.com',
    email: 'support@classicparts.example.com',
    updatedAt: '2024-07-15',
    description: 'Ricambi generalisti e cataloghi digitali per modelli europei anni 60-80.',
  },
  {
    section: 'specialisti-componenti',
    title: 'Brembo Heritage Lab',
    slug: 'brembo-heritage-lab',
    countryRegion: 'Italia / Lombardia',
    city: 'Bergamo',
    website: 'https://bremboheritage.example.com',
    phone: '+39 035 000000',
    updatedAt: '2024-06-22',
    description: 'Specialisti in impianti frenanti restaurati e riproduzioni certificate.',
  },
  {
    section: 'gruppi',
    title: 'Club Moto Epoca Milano',
    slug: 'club-moto-epoca-milano',
    countryRegion: 'Italia / Lombardia',
    city: 'Milano',
    website: 'https://club-milano.example.com',
    email: 'info@club-milano.example.com',
    updatedAt: '2024-10-01',
    description: 'Club locale con uscite settimanali e supporto pratiche di registrazione.',
  },
];

export const sections: Record<SectionKey, { label: string; description: string }> = {
  musei: {
    label: 'Musei',
    description: 'Mappe e schede dei musei della moto in Italia e nel mondo.',
  },
  'registri-storici': {
    label: 'Registri storici',
    description: 'Riferimenti FMI/ASI e registri riconosciuti per moto storiche.',
  },
  'restauratori-rivenditori': {
    label: 'Restauratori & rivenditori',
    description: 'Laboratori e rivenditori specializzati in moto d’epoca.',
  },
  ricambisti: {
    label: 'Ricambisti',
    description: 'Fornitori di ricambi generalisti e cataloghi dedicati.',
  },
  'specialisti-componenti': {
    label: 'Specialisti componenti',
    description: 'Esperti in freni, sospensioni e parti speciali.',
  },
  gruppi: {
    label: 'Gruppi / Club',
    description: 'Community locali e internazionali per appassionati.',
  },
};
