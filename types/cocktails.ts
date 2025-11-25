import CocktailJson from "@/lib/cocktails.json";

export interface Cocktail {
  id: string;
  name: string;
  nameKo: string;
  category: string;
  description: string;
  image: string;
  alcohol: number;
  difficulty: "Easy" | "Medium" | "Hard";
  ingredients: {
    name: string;
    amount: string;
  }[];
  garnish: string[];
  glass: string;
  method: string;
  taste: {
    sweet: number;
    sour: number;
    bitter: number;
    strong: number;
  };
  story: string;
}

export const cocktails: Cocktail[] = CocktailJson as Cocktail[];

export function getCocktailById(id: string): Cocktail | undefined {
  return cocktails.find(cocktail => cocktail.id === id);
}

export function getRelatedCocktails(currentId: string, limit: number = 3): Cocktail[] {
  return cocktails
    .filter(cocktail => cocktail.id !== currentId)
    .slice(0, limit);
}