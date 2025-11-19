import cocktailData from "@/lib/cocktails.json";
import Link from "next/link";

interface Ingredient {
  item: string;
  amount: string;
}

interface Cocktail {
  id: number;
  name: string;
  description: string;
  ingredients: Ingredient[];
  instructions: string[];
  category: string;
  glass: string;
  alcoholic: string;
  image: string;
}

export default function Dashboard() {
  const cocktails: Cocktail[] = cocktailData as Cocktail[];

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-slate-100 mb-6">OBar Dashboard</h1>

      {/* 통계 카드 영역 */}
      <div className="grid grid-cols-4 gap-6 mb-10 text-center">
        <div className="bg-pink-500/10 p-4 rounded-lg">Total Recipes: <span className="text-pink-400 fint-bold">{cocktails.length}</span></div>
        <div className="bg-pink-500/10 p-4 rounded-lg">Alcoholic Ratio: 85%</div>
        <div className="bg-pink-500/10 p-4 rounded-lg">Most Popular Glass: Highball</div>
        <div className="bg-pink-500/10 p-4 rounded-lg">Ingredients Count: 74</div>
      </div>

      {/* 검색창 영역 */}
      <div className="relative mb-10">
        <input
          type="text"
          placeholder="Search cocktail name or ingredients..."
          className="w-full p-4 pl-6 rounded-lg bg-slate-800 text-slate-100 border border-slate-700 focus:ring-2 focus: ring-pink-500 focus:border-transparent" />
      </div>

      {/* 칵테일 리스트 */}
      <div className="grid grid-cols-1 md:grid-cold-s-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {cocktails.map((cocktail) => (
          <Link href={`dashboard/${cocktail.id}`} key={cocktail.id}>
            <div className="bg-slate-800 rounded-lg shadow-lg p-4 cursor-pointer hover:bg-slate-700 transition duration-300">
              <img
                src={cocktail.image}
                alt={cocktail.name}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
              <h3 className="text-xl font-semibold text-white truncate">{cocktail.name}</h3>
              <p className={`text-sm font-medium ${cocktail.alcoholic === 'Alcoholic' ? 'text-red-400' : 'text-green-400'}`}>
                {cocktail.alcoholic}
              </p>
            </div>
          </Link>
        ))}
      </div>

    </main>
  );
}