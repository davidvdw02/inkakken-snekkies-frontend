import { DeviatedIngredient } from "./deviated-ingredient.model";

export type Recipe = {
  id: string;
  name: string;
  startTime: Date;
  duration: number;
  grade: number;
  pictureReference: string;
  onlineRecipeId: string;
  movieNightId: string;
  deviatedIngredients: DeviatedIngredient[];
}
