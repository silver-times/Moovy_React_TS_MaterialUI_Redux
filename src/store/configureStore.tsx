import { configureStore } from "@reduxjs/toolkit";
import { movieSlice } from "./movieSlice/movieSlice";
import { ratedMovieSlice } from "./ratingSlice/ratingSlice";
import { loadingSlice } from "./loadingSlice/loadingSlice";

export const store = configureStore({
  reducer: {
    movies: movieSlice.reducer,
    ratedMovies: ratedMovieSlice.reducer,
    loading: loadingSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
