import {Snekkie} from "./snekkie.model";

export type Entertainment = {
  id?: string;
  rating?: number;
  type?: EntertainmentType;
  onlineEntertainmentId?: string;
  movieNightId?: string;
  snekkies?: Snekkie[];
}

export enum EntertainmentType {
  MOVIE = 'MOVIE',
  SHOW = 'SHOW',
}
