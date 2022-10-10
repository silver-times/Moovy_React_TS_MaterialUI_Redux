import axios from "axios";
import { baseURL } from "./MovieAPI";

export const getSingleMovieData = async (id: number) => {
  const URL = `${baseURL}&i=${id}`;
  const res = await axios.get(URL);
  const gen = res.data.Genre;
  return gen;
};
