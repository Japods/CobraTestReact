import axios from "axios";

// Define las URLS base de tu API
const BASE_URL = "http://localhost:3000";
const URL_UNIVERSITY = "http://universities.hipolabs.com";
const URL_COUNTRY = "https://restcountries.com/v3.1/name/";

// Función para obtener usuarios
export const getUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Buscar Universidad
export const getUniversities = async (template: string) => {
  try {
    const response = await axios.get(
      `${URL_UNIVERSITY}/search?name=${template}&limit=10`
    );

    console.log("Response", response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Buscar Country University
export const getCountryUniversity = async (template: string) => {
  try {
    const response = await axios.get(`${URL_COUNTRY}/${template}`);

    console.log("Response", response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
