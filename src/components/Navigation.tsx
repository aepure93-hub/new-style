'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

const guideLinks = [
  { href: '/it/guide/musei', label: 'Musei' },
  { href: '/it/guide/registri-storici', label: 'Registri storici' },
  { href: '/it/guide/restauratori-rivenditori', label: 'Restauratori & rivenditori' },
  { href: '/it/guide/ricambisti', label: 'Ricambisti' },
  { href: '/it/guide/specialisti-componenti', label: 'Specialisti componenti' },
  { href: '/it/gruppi', label: 'Gruppi / Club' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMega, setOpenMega] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 32);
    handler();
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    if (openMega) {
      const handler = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setOpenMega(false);
      };
      window.addEventListener('keydown', handler);
      return () => window.removeEventListener('keydown', handler);
    }
    return undefined;
  }, [openMega]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? 'bg-white/90 dark:bg-neutral-950/80 shadow-soft' : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4" aria-label="Main navigation">
        <div className="flex items-center gap-4">
          <Link href="/it" className="font-serif text-xl font-semibold tracking-tight">
            Senza centralina
          </Link>
        </div>
        <div className="hidden items-center gap-6 md:flex">
          <div className="relative" onMouseLeave={() => setOpenMega(false)}>
            <button
              type="button"
              className="rounded-full px-3 py-1 text-sm hover:bg-black/5 dark:hover:bg-white/10"
              onMouseEnter={() => setOpenMega(true)}
              onFocus={() => setOpenMega(true)}
              aria-expanded={openMega}
              aria-haspopup="true"
            >
              Guide
            </button>
            {openMega && (
              <div
                className="absolute right-0 mt-2 grid w-[620px] grid-cols-4 gap-4 rounded-xl border border-accent/30 bg-white p-4 shadow-soft dark:border-neutral-800 dark:bg-neutral-900"
                role="menu"
              >
                <div className="col-span-3 grid grid-cols-3 gap-4">
                  {guideLinks.slice(0, 6).map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="rounded-lg p-3 text-sm hover:bg-black/5 focus-visible:outline focus-visible:outline-accent dark:hover:bg-white/10"
                      role="menuitem"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="space-y-2 rounded-lg bg-black/5 p-3 text-sm dark:bg-white/10">
                  <p className="font-semibold">In evidenza</p>
                  <p className="text-subtle">Curazione editoriale in arrivo.</p>
                </div>
              </div>
            )}
          </div>
          <Link href="/it/blog" className="text-sm hover:underline">
            Blog
          </Link>
          <Link href="/it/gruppi" className="text-sm hover:underline">
            Gruppi
          </Link>
          <Link href="/it/risorse-consigliate" className="text-sm hover:underline">
            Risorse
          </Link>
          <ThemeToggle />
        </div>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          ☰
        </button>
      </nav>
      {open && (
        <div className="border-t border-accent/20 bg-white px-6 py-4 shadow-soft dark:bg-neutral-950 md:hidden">
          <div className="flex flex-col gap-3">
            <Link href="/it" className="text-sm">
              Home
            </Link>
            <details className="rounded-lg border border-accent/20 p-3 text-sm">
              <summary className="cursor-pointer">Guide</summary>
              <div className="mt-2 space-y-2 pl-3">
                {guideLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="block">
                    {link.label}
                  </Link>
                ))}
              </div>
            </details>
            <Link href="/it/blog" className="text-sm">
              Blog
            </Link>
            <Link href="/it/gruppi" className="text-sm">
              Gruppi
            </Link>
            <Link href="/it/risorse-consigliate" className="text-sm">
              Risorse
            </Link>
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
