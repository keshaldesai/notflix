import { GET_POPULAR, GET_THEATRE } from "./types";
import axios from "axios";

const API_KEY = "f7a6b4be5b81c46de9945d56e3165355";
const API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=false`;

export function getPopular() {
  const request = axios.get(`${API}&sort_by=popularity.desc`);
  return {
    type: GET_POPULAR,
    payload: request
  };
}

export function getTheatre() {
  const request = axios.get(
    `${API}&primary_release_date.gte=2017-06-15&primary_release_date.lte=2017-06-30`
  );
  return {
    type: GET_THEATRE,
    payload: request
  };
}
