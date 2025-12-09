import { notFound } from 'next/navigation';
import { GuideExplorer } from '@/components/GuideExplorer';
import { entries, sections, SectionKey } from '@/data/entries';

interface GuidePageProps {
  params: { section: SectionKey };
}

export default function GuidePage({ params }: GuidePageProps) {
  const sectionData = sections[params.section];
  if (!sectionData) return notFound();
  const sectionEntries = entries.filter((entry) => entry.section === params.section);

  return (
    <div className="section-container space-y-4">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">{sectionData.label}</p>
        <h1 className="font-serif text-4xl">{sectionData.description}</h1>
        <p className="text-subtle">Layout 60/40 con mappa sticky su desktop.</p>
      </div>
      <GuideExplorer items={sectionEntries} section={params.section} />
    </div>
  );
}
