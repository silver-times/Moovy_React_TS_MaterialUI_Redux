import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../configureStore";

type LoadingSliceState = {
  loading: boolean;
  welcome: boolean;
};

const initialState: LoadingSliceState = {
  loading: false,
  welcome: true,
};

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    loadingOn(state) {
      state.loading = true;
    },
    loadingOff(state) {
      state.loading = false;
    },
    welcomeOn(state) {
      state.welcome = true;
    },
    welcomeOff(state) {
      state.welcome = false;
    },
  },
});

export const { loadingOn, loadingOff, welcomeOn, welcomeOff } =
  loadingSlice.actions;
export const loadingState = (state: RootState) => state.loading;
