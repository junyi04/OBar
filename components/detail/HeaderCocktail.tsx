import { Cocktail } from "@/types/cocktail";

export const HeaderCocktail = ({ cocktail }: { cocktail: Cocktail }) => {
  return (
    <div className="flex flex-col w-full lg:mt-10">
      <h1 className="text-3xl font-bold text-center lg:text-left my-4">
        {cocktail.name}
      </h1>

      <p className="text-md leading-loose bg-slate-800 px-6 py-4 rounded-md mt-8 mb-4">
        {cocktail.description}
      </p>

      <div className="px-4 py-3 bg-slate-800 rounded-md border-l-4 border-pink-600 my-4">
        <p className="text-sm text-slate-400">
          <span className="font-semibold text-pink-300">Category:</span> {cocktail.category}
          <span className="font-semibold text-pink-300 ml-6"> Glass:</span> {cocktail.glass}
        </p>
      </div>
    </div>
  );
}
