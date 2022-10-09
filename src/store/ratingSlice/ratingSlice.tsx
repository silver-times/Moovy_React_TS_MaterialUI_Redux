import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../configureStore";
import { RatedMovie } from "../../types/index";

type RatedMovieSliceState = {
  ratedMovies: RatedMovie[];
};

const initialState: RatedMovieSliceState = {
  ratedMovies: [],
};

export const ratedMovieSlice = createSlice({
  name: "ratedMovies",
  initialState,
  reducers: {
    addRatedMovies: (state, action: PayloadAction<RatedMovie>) => {
      state.ratedMovies.push(action.payload);
    },
  },
});

export const { addRatedMovies } = ratedMovieSlice.actions;
export const getAllRatedMovies = (state: RootState) =>
  state.ratedMovies.ratedMovies;
