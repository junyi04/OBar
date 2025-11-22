import { Cocktail } from "@/types/cocktail";

export const IngredientCocktail = ({ ingredients }: { ingredients: Cocktail["ingredients"] }) => {
  return (
    <div className="mt-16 flex flex-col justify-center items-center">
      <h2 className="text-2xl mb-4 text-pink-400">재료 (Ingredients)</h2>
      <ul className="list-disc pl-6 space-y-3">
        {ingredients.map((ingredient, index) => (
          <li key={index} className="text-slate-300">
            <span className="font-semibold">{ingredient.item}</span> - {ingredient.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}
