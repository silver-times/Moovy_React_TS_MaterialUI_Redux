import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import NoContentFound from "../components/NoContentFound";
import { Container, Grid, Typography, Box } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store";
import { addMovies, getAllMovies } from "../store/movieSlice/movieSlice";
import {
  loadingOn,
  loadingOff,
  loadingState,
} from "../store/loadingSlice/loadingSlice";
import Loader from "../components/Loader";

const Homepage = () => {
  const [searchedMovie, setSearchedMovie] = useState("a");
  const [searchedYear, setSearchedYear] = useState("");

  const dispatch = useAppDispatch();
  const movies = useAppSelector(getAllMovies);
  const loading = useAppSelector(loadingState);

  const getMovieData = async () => {
    dispatch(loadingOn());
    const URL = `http://www.omdbapi.com/?apikey=991f5194&s=${searchedMovie}&y=${searchedYear}&type=movie`;
    // const URL = `http://www.omdbapi.com/?apikey=991f5194&s=sally&page=${page}&type=movie`;
    const res = await axios.get(URL);
    // TOTAL_NUMBER_OF_MOVIES = +res.data.totalResults;
    // TOTAL_NUMBER_OF_PAGES = Math.ceil(+res.data.totalResults / MOVIES_PER_PAGE);
    dispatch(addMovies(res.data.Search));
    dispatch(loadingOff());
    // console.log(res.data);
  };

  useEffect(() => {
    getMovieData();
  }, [searchedMovie, searchedYear]);
  return (
    <div>
      <Container
        maxWidth="lg"
        sx={{
          marginY: 4,
        }}
      >
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
            <Typography variant="h2" color="text.secondary">
              No movies found!
            </Typography>
          </Box>
        )}
        {/* {searchedMovie && (
          <PaginationComponent
          // postsPerPage={MOVIES_PER_PAGE}
          // totalMovies={TOTAL_NUMBER_OF_MOVIES}
          // page={page}
          // setPage={setPage}
          // totalNumberOfPages={TOTAL_NUMBER_OF_PAGES}
          // paginateHandler={paginateHandler}
          />
        )} */}
      </Container>
    </div>
  );
};

export default Homepage;
