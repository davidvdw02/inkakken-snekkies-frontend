import {Attendee} from "./attendee.model";

export type MovieNight = {
  id: string;
  date: Date;
  location: string;
  attendees: Attendee[];
}
