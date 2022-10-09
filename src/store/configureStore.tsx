import { configureStore } from "@reduxjs/toolkit";
import { movieSlice } from "./movieSlice/movieSlice";
import { ratedMovieSlice } from "./ratingSlice/ratingSlice";

export const store = configureStore({
  reducer: {
    movies: movieSlice.reducer,
    ratedMovies: ratedMovieSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
