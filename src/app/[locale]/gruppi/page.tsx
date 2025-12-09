import { GuideExplorer } from '@/components/GuideExplorer';
import { entries } from '@/data/entries';

export default function GruppiPage() {
  const groupEntries = entries.filter((entry) => entry.section === 'gruppi');
  return (
    <div className="section-container space-y-4">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">Gruppi</p>
        <h1 className="font-serif text-4xl">Community e club</h1>
        <p className="text-subtle">Lista fruibile anche senza mappa, con search e ordinamento.</p>
      </div>
      <GuideExplorer items={groupEntries} section="gruppi" />
    </div>
  );
}
