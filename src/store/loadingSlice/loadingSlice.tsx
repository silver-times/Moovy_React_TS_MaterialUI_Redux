import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../configureStore";

type LoadingSliceState = {
  loading: boolean;
  errorAlert: boolean;
};

const initialState: LoadingSliceState = {
  loading: false,
  errorAlert: false,
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
    errorAlertOn(state) {
      state.errorAlert = true;
    },
    errorAlertOff(state) {
      state.errorAlert = false;
    },
  },
});

export const { loadingOn, loadingOff, errorAlertOn, errorAlertOff } =
  loadingSlice.actions;
export const loadingState = (state: RootState) => state.loading;
