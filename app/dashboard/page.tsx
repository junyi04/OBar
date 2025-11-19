import cocktailData from "@/lib/cocktails.json";

interface Ingredient {
  item: string;
  amount: string;
}

interface Cocktail {
  name: string;
  description: string;
  ingredients: Ingredient[];
  instructions: string[];
  category: string;
  glass: string;
}

export default function Dashboard() {
  const cocktails: Cocktail[] = cocktailData as Cocktail[];

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-slate-100 mb-6">OBar Dashboard</h1>

      {/* 통계 카드 영역 */}
      <div className="grid frid-cols-4 gap-6 mb-10 text-center">
        <div className="bg-pink-500/10 p-4 rounded-lg">Total Recipes: <span className="text-pink-400 fint-bold">{cocktails.length}</span></div>
        <div className="bg-pink-500/10 p-4 rounded-lg">Alcoholic Ratio: 85%</div>
        <div className="bg-pink-500/10 p-4 rounded-lg">Most Popular Glass: Highball</div>
        <div className="bg-pink-500/10 p-4 rounded-lg">Ingredients Count: 74</div>
      </div>

    

    </main>
  );
}