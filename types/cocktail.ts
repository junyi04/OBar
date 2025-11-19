export interface Ingredient {
  item: string;
  amount: string;
}

export interface Cocktail {
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