import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import Grid from "@mui/material/Grid";
import MovieCard from "../components/MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { addMovies, getAllMovies } from "../store/movieSlice/movieSlice";
import PaginationComponent from "../components/PaginationComponent";
import NoContentFound from "../components/NoContentFound";
import { Typography, Box } from "@mui/material";

const MOVIES_PER_PAGE: number = 10;
let TOTAL_NUMBER_OF_PAGES: number;

const Homepage = () => {
  const [searchedMovie, setSearchedMovie] = useState("");
  const [searchedYear, setSearchedYear] = useState("");
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const movies = useSelector(getAllMovies);

  const getMovieData = async () => {
    const URL = `http://www.omdbapi.com/?apikey=991f5194&s=${searchedMovie}&y=${searchedYear}&type=movie&page=${page}`;
    // const URL = `http://www.omdbapi.com/?apikey=991f5194&s=sally&page=${page}&type=movie`;
    const res = await axios.get(URL);
    TOTAL_NUMBER_OF_PAGES = Math.ceil(+res.data.totalResults / MOVIES_PER_PAGE);
    dispatch(addMovies(res.data.Search));
  };

  useEffect(() => {
    getMovieData();
  }, [searchedMovie, searchedYear, page]);

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
        {searchedMovie && (
          <PaginationComponent
            page={page}
            setPage={setPage}
            totalNumberOfPages={TOTAL_NUMBER_OF_PAGES}
          />
        )}
      </Container>
    </div>
  );
};

export default Homepage;
