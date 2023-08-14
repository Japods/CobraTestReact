import { ActionTypes } from "./actions";
import { GlobalState } from "./global-state.interface";
import { University } from "../../types/universities";

const initialState: GlobalState = {
  users: [],
  country_information: {},
  user_logged: {
    email: "",
    password: "",
    universities: [],
  },
  universities: [],
  universities_selected: {
    alpha_two_code: "",
    name: "string",
    country: "string",
  },
};

export function reducer(
  state = initialState,
  action: ActionTypes
): GlobalState {
  switch (action.type) {
    case "GET_USERS": {
      return { ...state, users: action.payload };
    }
    case "GET_UNIVERSITY": {
      return { ...state, universities: action.payload };
    }
    case "SET_USER": {
      return { ...state, user_logged: action.payload };
    }
    case "SET_UNIVERSITIE": {
      return { ...state, universities_selected: action.payload };
    }
    case "SAVE_UNIVERSITIE": {
      state.user_logged.universities.push(action.payload);
      console.log("State desps del push", state.user_logged.universities);
      return state;
    }
    case "UNSAVE_UNIVERSITIE": {
      console.log("entrando a unsave", action.payload);
      return state; // Debes manejar también el caso en que no se encuentra el elemento
    }
    case "SEARCH_COUNTRY_UNIVERSITY": {
      return { ...state, country_information: action.payload };
    }
  }
  return state;
}
