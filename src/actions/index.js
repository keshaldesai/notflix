import { GET_POPULAR, GET_THEATRE } from "./types";
import axios from "axios";
import { API_KEY } from "../config/config.json";

const API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=false&vote_average.gte=4`;

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
