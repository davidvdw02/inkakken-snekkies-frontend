import { Ingredient } from './ingredient.model';

export type OnlineRecipe = {
  id?: string;
  link: string;
  duration?: number;
  name?: string;
  ingredients?: Ingredient[];
}
