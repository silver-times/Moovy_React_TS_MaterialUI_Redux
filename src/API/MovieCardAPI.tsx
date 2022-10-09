import axios from "axios";

export const getSingleMovieData = async (id: number) => {
  const URL = `http://www.omdbapi.com/?apikey=991f5194&i=${id}`;
  const res = await axios.get(URL);
  const gen = res.data.Genre;
  return gen;
};
