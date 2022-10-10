import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../configureStore";
import { RatedMovie } from "../../types/index";

type RatedMovieSliceState = {
  ratedMovies: RatedMovie[];
  uniqueGenres: any[];
};

const initialState: RatedMovieSliceState = {
  ratedMovies: [],
  uniqueGenres: [],
};

export const ratedMovieSlice = createSlice({
  name: "ratedMovies",
  initialState,
  reducers: {
    addRatedMovies: (state, action: PayloadAction<RatedMovie>) => {
      state.ratedMovies.push(action.payload);
    },
    addGenres: (state, action: PayloadAction<string[]>) => {
      state.uniqueGenres.push(action.payload);
    },
  },
});

export const { addRatedMovies, addGenres } = ratedMovieSlice.actions;
export const getAllRatedMovies = (state: RootState) => state.ratedMovies;
