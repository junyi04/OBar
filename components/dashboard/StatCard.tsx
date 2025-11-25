import { Cocktail } from "@/types/cocktails";
import cocktailData from "@/lib/cocktails.json";

export const StatCard = () => {
  const cocktails: Cocktail[] = cocktailData as Cocktail[];
  
  return (
    <div className="grid grid-cols-4 gap-6 my-10 text-center h-30">
      <div className="flex justify-center items-center bg-pink-500/10 p-4 rounded-lg border-l-4 border-pink-600">Total Recipes: <span className="text-pink-400 fint-bold">{cocktails.length}</span></div>
      <div className="flex justify-center items-center bg-pink-500/10 p-4 rounded-lg">Alcoholic Ratio: 85%</div>
      <div className="flex justify-center items-center bg-pink-500/10 p-4 rounded-lg">Most Popular Glass: Highball</div>
      <div className="flex justify-center items-center bg-pink-500/10 p-4 rounded-lg">Ingredients Count: 74</div>
    </div>
  );
}