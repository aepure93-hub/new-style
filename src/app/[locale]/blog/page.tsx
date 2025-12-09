import Link from 'next/link';

const mockPosts = [
  {
    slug: 'benvenuti-nel-blog',
    title: 'Benvenuti nel blog',
    excerpt: 'Aggiornamenti, storie e highlight dalla community delle moto d’epoca.',
    updatedAt: '2024-10-10',
  },
  {
    slug: 'musei-da-non-perdere',
    title: '5 musei da non perdere',
    excerpt: 'Una selezione iniziale per il lancio del progetto.',
    updatedAt: '2024-09-01',
  },
];

export default function BlogListing() {
  return (
    <div className="section-container">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">Blog</p>
          <h1 className="font-serif text-4xl">Articoli</h1>
          <p className="text-subtle">Layout leggibile, pronto per collegare entry correlate.</p>
        </div>
        <Link href="/it" className="text-sm underline">
          Torna alla home
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {mockPosts.map((post) => (
          <Link key={post.slug} href={`/it/blog/${post.slug}`} className="card-surface block p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">Aggiornato il {post.updatedAt}</p>
            <h2 className="font-serif text-2xl">{post.title}</h2>
            <p className="text-subtle">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
