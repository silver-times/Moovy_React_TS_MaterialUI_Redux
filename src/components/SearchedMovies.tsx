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
  errorAlertOn,
  errorAlertOff,
} from "../store/loadingSlice/loadingSlice";
import { addMovies, getAllMovies } from "../store/movieSlice/movieSlice";
import SearchBar from "./SearchBar";
import MovieCard from "./MovieCard";
import Loader from "../components/Loader";
import { baseURL } from "../API/MovieAPI";
import PaginationComponent from "./PaginationComponent";

let TOTAL_MOVIES: number;
let TOTAL_PAGES: number;

const SearchedMovies = () => {
  const [searchedMovie, setSearchedMovie] = useState("");
  const [searchedYear, setSearchedYear] = useState("");
  const [page, setPage] = useState(1);

  const dispatch = useAppDispatch();
  const movies = useAppSelector(getAllMovies);
  const { loading, errorAlert } = useAppSelector(loadingState);

  const getMovieData = async () => {
    dispatch(loadingOn());
    // dispatch(welcomeOff());
    const URL = `${baseURL}&s=${searchedMovie}&y=${searchedYear}&type=movie&page=${page}`;
    const res = await axios.get(URL);
    if (res.data.Error === "Movie not found!") {
      dispatch(errorAlertOn());
    } else {
      dispatch(errorAlertOff());
    }

    TOTAL_MOVIES = +res.data.totalResults;
    TOTAL_PAGES = Math.ceil(TOTAL_MOVIES / 10);

    dispatch(addMovies(res.data.Search));
    dispatch(loadingOff());
  };

  useEffect(() => {
    getMovieData();
  }, [searchedMovie, searchedYear, page]);

  return (
    <Box sx={{ marginTop: "40px" }}>
      <SearchBar
        setSearchedMovie={setSearchedMovie}
        setSearchedYear={setSearchedYear}
      />
      {loading && <Loader />}
      {errorAlert ? (
        <Box sx={{ textAlign: "center", paddingY: 4 }}>
          <Typography variant="h2" color="text.secondary">
            Sorry, no movie found!
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Please try again!
          </Typography>
        </Box>
      ) : (
        ""
      )}
      {movies?.length ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid container alignItems="stretch" spacing={4}>
            {movies.map((movie) => (
              <Grid item xs={6} md={3} key={movie.imdbID}>
                <MovieCard movie={movie} />
              </Grid>
            ))}
          </Grid>
          <Box sx={{ marginTop: "60px", paddingBottom: "10px" }}>
            <PaginationComponent setPage={setPage} totalPages={TOTAL_PAGES} />
          </Box>
        </Box>
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
