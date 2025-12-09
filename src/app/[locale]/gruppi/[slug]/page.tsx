import { notFound } from 'next/navigation';
import { entries } from '@/data/entries';
import { EntryDetail } from '@/components/EntryDetail';

interface GroupPageProps {
  params: { slug: string };
}

export default function GroupDetail({ params }: GroupPageProps) {
  const entry = entries.find((item) => item.section === 'gruppi' && item.slug === params.slug);
  if (!entry) return notFound();
  return <EntryDetail entry={entry} />;
}
