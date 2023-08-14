import { User } from "../../types/user";
import { University } from "../../types/universities";

export interface GlobalState {
  users: User[];
  user_logged: User;
  country_information: any;
  universities: University[];
  universities_selected: University;
}
