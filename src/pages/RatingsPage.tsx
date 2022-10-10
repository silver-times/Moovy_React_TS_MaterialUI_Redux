import { useSelector } from "react-redux";
import { getAllRatedMovies } from "../store/ratingSlice/ratingSlice";
import { Container, Grid, Box, Typography } from "@mui/material";
import RatedMovieCard from "../components/RatedMovieCard";
import NoContentFound from "../components/NoContentFound";

const RatingsPage = () => {
  const ratedMovies = useSelector(getAllRatedMovies);
  const finalRatedMovies = ratedMovies.filter(
    (ele, ind) =>
      ind === ratedMovies.findIndex((elem) => elem.imdbID === ele.imdbID)
  );

  const genres = ratedMovies.map((movie) => {
    const res = movie.Genre.split(",");
    return res;
  });

  const finalGenres = ([] as string[]).concat.apply([], genres);
  const filteredGenres = finalGenres.map((s) => s.trim());
  const uniqueArray = filteredGenres.filter(function (item, pos) {
    return filteredGenres.indexOf(item) == pos;
  });
  console.log(uniqueArray);

  return (
    <div>
      <Container
        maxWidth="lg"
        sx={{
          paddingY: 8,
        }}
      >
        {finalRatedMovies?.length ? (
          <Grid container alignItems="stretch" spacing={4}>
            {finalRatedMovies
              .filter((movie) => movie.imdbID)
              .map((movie) => (
                <Grid item xs={6} md={3} key={movie.imdbID}>
                  <RatedMovieCard movie={movie} />
                </Grid>
              ))}
          </Grid>
        ) : (
          <Box sx={{ textAlign: "center", paddingY: 4 }}>
            <NoContentFound />
            <Typography variant="h2" color="text.secondary"></Typography>
          </Box>
        )}
      </Container>
    </div>
  );
};

export default RatingsPage;
