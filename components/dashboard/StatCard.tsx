import { Cocktail } from "@/types/cocktail";
import cocktailData from "@/lib/cocktails.json";

export const StatCard = () => {
  const cocktails: Cocktail[] = cocktailData as Cocktail[];
  return (
    <div className="grid grid-cols-4 gap-6 mb-10 text-center">
      <div className="bg-pink-500/10 p-4 rounded-lg">Total Recipes: <span className="text-pink-400 fint-bold">{cocktails.length}</span></div>
      <div className="bg-pink-500/10 p-4 rounded-lg">Alcoholic Ratio: 85%</div>
      <div className="bg-pink-500/10 p-4 rounded-lg">Most Popular Glass: Highball</div>
      <div className="bg-pink-500/10 p-4 rounded-lg">Ingredients Count: 74</div>
    </div>
  );
}