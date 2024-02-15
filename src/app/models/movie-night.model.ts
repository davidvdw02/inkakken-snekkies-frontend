import {Attendee} from "./attendee.model";

export type movieNight = {
  id: string;
  date: Date;
  location: string;
  attendees: Attendee[];
}
