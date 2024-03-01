import {Genre} from "./genre.model";

export type OnlineEntertainment = {
   id?: string;
   tmdbId: number;
  title: string;
  duration: number;
  rating: number;
  episode?: number | null;
  posterPath: string;
  genres: Genre[];
  releaseDate: Date;
  season: number | null;
  episodeTitle: string | null;
  stillImagePath: string | null;
};
