'use client';

import { usePathname } from 'next/navigation';
import cocktailData from "@/lib/cocktails.json";
import { useEffect, useState } from 'react';
import { Cocktail } from '@/types/cocktail';
import { ImageCocktail } from '@/components/detail/ImageCocktail';
import { HeaderCocktail } from '@/components/detail/HeaderCocktail';
import { IngredientCocktail } from '@/components/detail/IngredientCocktail';
import { InstructionCocktail } from '@/components/detail/InstructionCocktail';

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
    <main className="container mx-auto p-4 bg-slate-950 text-slate-200">
      {/* 상단 */}
      <div className="flex flex-col items-center gap-12 lg:grid lg:grid-cols-[auto_1fr] lg:items-start lg:gap-16 max-w-4xl mx-auto">
        <ImageCocktail image={cocktail.image} name={cocktail.name} />
        <HeaderCocktail cocktail={cocktail} />
      </div>

      {/* 하단 */}
      <IngredientCocktail ingredients={cocktail.ingredients} />
      <InstructionCocktail instructions={cocktail.instructions} />
    </main>
  );
};