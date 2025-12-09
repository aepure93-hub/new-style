import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { entries, SectionKey } from '@/data/entries';
import { EntryDetail } from '@/components/EntryDetail';

interface EntryPageProps {
  params: { section: SectionKey; slug: string };
}

export function generateMetadata({ params }: EntryPageProps): Metadata {
  const entry = entries.find((item) => item.slug === params.slug && item.section === params.section);
  return {
    title: entry ? `${entry.title} | Senza centralina` : 'Scheda entry',
    description: entry?.description ?? 'Scheda dettaglio directory.',
  };
}

export default function EntryPage({ params }: EntryPageProps) {
  const entry = entries.find((item) => item.slug === params.slug && item.section === params.section);
  if (!entry) return notFound();
  return <EntryDetail entry={entry} />;
}
