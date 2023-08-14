import { User } from "../../types/user";
import { University } from "../../types/universities";
import {
  getUniversities,
  getUsers,
  getCountryUniversity,
} from "../../services/UserService";

export interface GetUsersAction {
  type: "GET_USERS";
  payload: User[];
}

export interface GetUniversity {
  type: "GET_UNIVERSITY";
  payload: University[];
}

export interface setUSer {
  type: "SET_USER";
  payload: User;
}

export interface setUniversity {
  type: "SET_UNIVERSITIE";
  payload: University;
}

export interface saveUniversity {
  type: "SAVE_UNIVERSITIE";
  payload: University;
}

export interface unSaveUniversity {
  type: "UNSAVE_UNIVERSITIE";
  payload: University;
}

export interface searchCountryUniversity {
  type: "SEARCH_COUNTRY_UNIVERSITY";
  payload: University;
}

export const getAllUsers = () => {
  return async (dispatch) => {
    try {
      const users = await getUsers();
      dispatch({
        type: "GET_USERS",
        payload: users,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const setUserLogged = (template) => {
  return async (dispatch) => {
    dispatch({
      type: "SET_USER",
      payload: template,
    });
  };
};

export const setUniversitieSelected = (template) => {
  return async (dispatch) => {
    dispatch({
      type: "SET_UNIVERSITIE",
      payload: template,
    });
  };
};

export const saveUniversity = (template) => {
  return async (dispatch) => {
    dispatch({
      type: "SAVE_UNIVERSITIE",
      payload: template,
    });
  };
};

export const unSaveUniversity = (template: string) => {
  return async (dispatch) => {
    dispatch({
      type: "UNSAVE_UNIVERSITIE",
      payload: template,
    });
  };
};

export const searchUniversity = (template: string) => {
  return async (dispatch) => {
    try {
      const universities = await getUniversities(template);
      console.log("Univesidades", universities);
      dispatch({
        type: "GET_UNIVERSITY",
        payload: universities,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const searchCountryUniversity = (template) => {
  return async (dispatch) => {
    try {
      const countryInfo = await getCountryUniversity(template);
      console.log("Univesidades", countryInfo);
      dispatch({
        type: "SEARCH_COUNTRY_UNIVERSITY",
        payload: countryInfo,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export type ActionTypes =
  | GetUsersAction
  | GetUniversity
  | setUSer
  | setUniversity
  | saveUniversity
  | unSaveUniversity
  | searchCountryUniversity;
