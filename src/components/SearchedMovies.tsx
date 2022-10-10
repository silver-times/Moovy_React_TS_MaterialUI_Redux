import { useEffect } from "react";
import { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import NoContentFound from "../components/NoContentFound";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../store";
import {
  loadingOn,
  loadingOff,
  loadingState,
} from "../store/loadingSlice/loadingSlice";
import { addMovies, getAllMovies } from "../store/movieSlice/movieSlice";
import SearchBar from "./SearchBar";
import MovieCard from "./MovieCard";
import Loader from "../components/Loader";
import { baseURL } from "../API/MovieAPI";
const SearchedMovies = () => {
  const [searchedMovie, setSearchedMovie] = useState("");
  const [searchedYear, setSearchedYear] = useState("");

  const dispatch = useAppDispatch();
  const movies = useAppSelector(getAllMovies);
  const { loading, welcome } = useAppSelector(loadingState);

  const getMovieData = async () => {
    dispatch(loadingOn());
    const URL = `${baseURL}&s=${searchedMovie}&y=${searchedYear}&type=movie`;
    // const URL = `http://www.omdbapi.com/?apikey=991f5194&s=sally&page=${page}&type=movie`;
    const res = await axios.get(URL);
    dispatch(addMovies(res.data.Search));
    dispatch(loadingOff());
  };

  useEffect(() => {
    getMovieData();
  }, [searchedMovie, searchedYear]);

  return (
    <Box sx={{ marginY: "40px" }}>
      <SearchBar
        setSearchedMovie={setSearchedMovie}
        setSearchedYear={setSearchedYear}
      />
      {loading && <Loader />}
      {movies?.length ? (
        <Grid container alignItems="stretch" spacing={4}>
          {movies.map((movie) => (
            <Grid item xs={6} md={3} key={movie.imdbID}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box sx={{ textAlign: "center", paddingY: 4 }}>
          <NoContentFound />
          <Typography variant="h2" color="text.secondary"></Typography>
        </Box>
      )}
    </Box>
  );
};

export default SearchedMovies;
