import { Cocktail } from "@/types/cocktail";

export const HeaderCocktail = ({ cocktail }: { cocktail: Cocktail }) => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <h1 className="text-4xl font-bold text-center lg:text-left text-pink-500">
        {cocktail.name}
      </h1>

      <p className="text-lg bg-slate-800 p-4 rounded-md">
        {cocktail.description}
      </p>

      <div className="p-3 bg-slate-800 rounded-md border-l-4 border-pink-600">
        <p className="text-sm text-slate-400">
          <span className="font-semibold text-pink-300">Category:</span> {cocktail.category} | 
          <span className="font-semibold text-pink-300"> Glass:</span> {cocktail.glass}
        </p>
      </div>
    </div>
  );
}
