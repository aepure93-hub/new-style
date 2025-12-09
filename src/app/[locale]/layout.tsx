import { Navigation } from '@/components/Navigation';
import type { ReactNode } from 'react';

export default function LocaleLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24">{children}</main>
      <footer className="mt-16 border-t border-accent/20 bg-black/5 py-8 text-center text-sm dark:bg-white/5">
        <p className="text-subtle">Senza centralina — directory e blog per moto d’epoca.</p>
      </footer>
    </div>
  );
}
