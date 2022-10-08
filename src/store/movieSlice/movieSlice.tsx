import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../configureStore";
import { Movie } from "../../types/index";

type MovieSliceState = {
  movies: Movie[];
};

const initialState: MovieSliceState = {
  movies: [],
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, action: PayloadAction<Movie[]>) => {
      state.movies = action.payload;
    },
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state: RootState) => state.movies.movies;
