import { Cocktail } from "@/types/cocktails";

export const IngredientCocktail = ({ ingredients }: { ingredients: Cocktail["ingredients"] }) => {
  return (
    <div className="mt-16 flex flex-col items-center">
      <div className="w-full max-w-4xl text-left">
        <h2 className="text-xl ml-4 mb-6 text-white font-medium">재료 정보</h2>

        <div className="bg-slate-800 rounded-lg px-12 py-6 shadow-lg border border-pink-600">
          <ul className="space-y-3">
            {ingredients.map((ingredient, index) => (
              <li
                key={index}
                className="flex justify-between items-center text-slate-300"
              >
                <span className="font-semibold text-pink-300">
                  {ingredient.item}
                </span>
                <span className="text-slate-400">{ingredient.amount}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

  );
}
