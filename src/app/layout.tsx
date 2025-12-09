import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Senza centralina',
  description: 'Directory map-first e blog per appassionati di moto d’epoca.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="it">
      <body className="bg-background-light text-text-light transition-colors duration-300 dark:bg-background-dark dark:text-text-dark">
        {children}
      </body>
    </html>
  );
}
