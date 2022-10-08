import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import Grid from "@mui/material/Grid";
import MovieCard from "../components/MovieCard";
import { Movie } from "../types/index";
import { useDispatch, useSelector } from "react-redux";
import { addMovies, getAllMovies } from "../store/movieSlice/movieSlice";
import Footer from "../components/Footer";

const Homepage = () => {
  const [movieList, setMovieList] = useState([] as Movie[]);
  const [searchedMovie, setSearchedMovie] = useState("");
  const [searchedYear, setSearchedYear] = useState("");
  const dispatch = useDispatch();
  const movies = useSelector(getAllMovies);

  const getMovieData = async () => {
    // const URL = `http://www.omdbapi.com/?apikey=991f5194&s=${searchedMovie}&y=${searchedYear}`;
    const URL = `http://www.omdbapi.com/?apikey=991f5194&s=sally&page=2`;
    const res = await axios.get(URL);
    console.log(res.data);
    // setMovieList(res.data.Search);
    // return res.data.Search;
    dispatch(addMovies(res.data.Search));
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

        {movies?.length ? (
          <Grid container alignItems="stretch" spacing={4}>
            {movies.map((movie) => (
              <Grid item xs={6} md={3} key={movie.imdbID}>
                <MovieCard movie={movie} />
              </Grid>
            ))}
          </Grid>
        ) : (
          "No movie"
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default Homepage;
