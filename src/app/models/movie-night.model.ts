import {Attendee} from "./attendee.model";

export type MovieNight = {
  id: string;
  date: string;
  location: string;
  attendees: Attendee[];
}
