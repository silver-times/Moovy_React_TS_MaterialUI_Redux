import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../configureStore";

type LoadingSliceState = {
  loading: boolean;
};

const initialState: LoadingSliceState = {
  loading: false,
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
  },
});

export const { loadingOn, loadingOff } = loadingSlice.actions;
export const loadingState = (state: RootState) => state.loading.loading;
