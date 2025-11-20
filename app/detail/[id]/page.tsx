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
    <main className="container mx-auto p-4 bg-slate-950 text-slate-200">
      <h1 className="text-4xl font-bold text-center text-pink-500 mt-5 mb-10">{cocktail.name}</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="relative w-full h-80 lg:h-96">
          {/* 이미지 */}
          <img 
            src={cocktail.image} 
            alt={cocktail.name} 
            className="w-full h-full object-cover rounded-lg shadow-2xl" 
          />
        </div>

        {/* 칵테일 설명 */}
        <div className="flex flex-col">
          <p className="text-lg mb-8 bg-slate-800 p-4 rounded-md italic border-l-4 border-pink-600">
            {cocktail.description}
          </p>

          {/* 메타 정보 */}
          <div className="mb-8 p-3 bg-slate-800 rounded-md">
            <p className="text-sm text-slate-400">
                <span className="font-semibold text-pink-300">Category:</span> {cocktail.category} | 
                <span className="font-semibold text-pink-300"> Glass:</span> {cocktail.glass}
            </p>
          </div>
        </div>
      </div>
      
      {/* 재료 / 제조법 */}
      <div className="mt-12 pt-6 border-t border-slate-700 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl mt-6 mb-4 text-pink-400">🥂 재료 (Ingredients)</h2>
          <ul className="list-disc pl-6 space-y-3">
            {cocktail.ingredients.map((ingredient, index) => (
              <li key={index} className="text-slate-300">
                <span className="font-semibold">{ingredient.item}</span> - {ingredient.amount}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl mt-6 mb-4 text-pink-400">📋 제조법 (Instructions)</h2>
          <ol className="list-decimal pl-6 space-y-3">
            {cocktail.instructions.map((instruction, index) => (
              <li key={index} className="text-slate-300">{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    </main>
  );
};