import Link from 'next/link';
import type { Metadata } from 'next';

interface ArticlePageProps {
  params: { slug: string };
}

export function generateMetadata({ params }: ArticlePageProps): Metadata {
  return {
    title: `${params.slug} | Blog Senza centralina`,
    description: 'Articolo placeholder pronto per contenuti CMS.',
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  return (
    <div className="section-container">
      <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">Blog</p>
      <h1 className="font-serif text-4xl">{params.slug.replace(/-/g, ' ')}</h1>
      <p className="text-subtle">Aggiornato il 2024-09-01</p>
      <div className="prose prose-neutral max-w-3xl dark:prose-invert">
        <p>
          Questo è un placeholder leggibile per verificare il layout degli articoli. Il testo rispetta un max-width e una
          line-height generosa per favorire la lettura su desktop e mobile.
        </p>
        <p>
          In una fase successiva il corpo sarà alimentato da Sanity con possibilità di collegare entry della directory come
          riferimenti correlati.
        </p>
      </div>
      <Link href="/it/blog" className="mt-6 inline-block text-sm underline">
        Torna al blog
      </Link>
    </div>
  );
}
