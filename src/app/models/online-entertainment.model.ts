import {Genre} from "./genre.model";

export type OnlineEntertainment = {
  id?: string
  name: string;
  duration: number;
  rating: number;
  episode: number;
  link: string;
  genres: Genre[];
}
