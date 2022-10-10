import { useSelector } from "react-redux";
import { getAllRatedMovies } from "../store/ratingSlice/ratingSlice";
import Container from "@mui/material/Container";
import { RatedMovie } from "../types";
import Grid from "@mui/material/Grid";
import RatedMovieCard from "../components/RatedMovieCard";

const RatingsPage = () => {
  const ratedMovies = useSelector(getAllRatedMovies);
  const finalRatedMovies = ratedMovies.filter(
    (ele, ind) =>
      ind === ratedMovies.findIndex((elem) => elem.imdbID === ele.imdbID)
  );

  return (
    <div>
      <Container
        maxWidth="lg"
        sx={{
          marginY: 4,
        }}
      >
        <Grid container alignItems="stretch" spacing={4}>
          {finalRatedMovies
            .filter((movie) => movie.imdbID)
            .map((movie) => (
              <Grid item xs={6} md={3} key={movie.imdbID}>
                <RatedMovieCard movie={movie} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </div>
  );
};

export default RatingsPage;
