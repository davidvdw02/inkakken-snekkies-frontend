import { Ingredient } from "./ingredient.model";

export type DeviatedIngredient = {
  id?: string;
  amount?: number;
  addedOrSubstracted?: boolean;
  ingredient: Ingredient;
}
