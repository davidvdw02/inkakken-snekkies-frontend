import { DeviatedIngredient } from "./deviated-ingredient.model";
import { RecipePicture } from "./recipe_picture.model";

export type Recipe = {
  id?: string;
  startTime?: Date;
  duration?: number;
  grade?: number;
  recipePictures?: RecipePicture[];
  onlineRecipeId?: string;
  movieNightId?: string;
  deviatedIngredients?: DeviatedIngredient[];
}
