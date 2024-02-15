import {Snekkie} from "./snekkie.model";

export type Entertainment = {
  id: string;
  rating: number;
  duration: number;
  type: Type;
  onlineEntertainmentId: string;
  movieNightId: string;
  snekkies: Snekkie[];
}

enum Type {
  MOVIE,
  SHOW,
}
