import { GET_POPULAR } from "./types";
import axios from "axios";

const API_KEY = "f7a6b4be5b81c46de9945d56e3165355";
const API = `https://api.themoviedb.org/3/discover/movie?${API_KEY}`;

export function getPopular() {
  const request = axios.get(`${API}&sort_by=popularity.desc`);
  return {
    type: GET_POPULAR,
    payload: request
  };
}
