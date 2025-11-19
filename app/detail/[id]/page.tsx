'use client';

import { usePathname } from 'next/navigation';
import cocktailData from "@/lib/cocktails.json";
import { useEffect, useState } from 'react';
import { Cocktail } from '@/types/cocktail';

export default function DetailPage() {
  const pathname = usePathname();
  const id = pathname?.split('/').pop();
  const [cocktail, setCocktail] = useState<Cocktail | null>(null);

  useEffect(() => {
    if (id) {
      const foundCocktail = cocktailData.find((c) => c.id === Number(id));
      setCocktail(foundCocktail || null);
    }
  }, [id]);

  if (!cocktail) {
    return <p>Loading...</p>;
  }

  return (
    <main className='container mx-auto px-4 py-8'>
      <h1>Detail Page for ID: {id}</h1>
      <h2>{cocktail.name}</h2>
      <p>{cocktail.description}</p>
      <img src={cocktail.image} alt={cocktail.name} />
    </main>
  );
};