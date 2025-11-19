import { Cocktail } from "@/types/cocktail";
import Link from "next/link";
import cocktailData from "@/lib/cocktails.json";

export const CocktailMapping = () => {
  const cocktails: Cocktail[] = cocktailData as Cocktail[];

  return (
    <div className="grid grid-cols-1 md:grid-cold-s-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {cocktails.map((cocktail) => (
        <Link href={`/detail/${cocktail.id}`} key={cocktail.id}>
          <div className="bg-slate-800 rounded-lg shadow-lg p-4 cursor-pointer hover:bg-slate-700 transition duration-300">
            <img
              src={cocktail.image}
              alt={cocktail.name}
              className="w-full h-80 object-cover rounded-md mb-3"
            />
            <h3 className="text-xl font-semibold text-white truncate">{cocktail.name}</h3>
            <p className={`text-sm font-medium ${cocktail.alcoholic === 'Alcoholic' ? 'text-red-400' : 'text-green-400'}`}>
              {cocktail.alcoholic}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}