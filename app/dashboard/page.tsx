import { StatCard } from "@/components/dashboard/StatCard";
import { SeachBar } from "@/components/dashboard/SearchBar";
import { CocktailMapping } from "@/components/dashboard/CocktailMapping";


export default function DashboardPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-slate-100 my-6">Welcome to the OBar!</h1>

      {/* 통계 카드 영역 */}
      <StatCard />

      {/* 검색창 영역 */}
      <SeachBar />

      {/* 칵테일 리스트 */}
      <CocktailMapping />

    </main>
  );
}