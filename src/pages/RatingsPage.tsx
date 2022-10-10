import { useEffect, useState } from "react";
import { Container, Grid, Box } from "@mui/material";
import RatedMovieCard from "../components/RatedMovieCard";
import NoContentFound from "../components/NoContentFound";
import { getAllRatedMovies } from "../store/ratingSlice/ratingSlice";
import { useAppDispatch, useAppSelector } from "../store";
import { addGenres } from "../store/ratingSlice/ratingSlice";
import Filter from "../components/Filter";

const RatingsPage = () => {
  const [clickedGenre, setClickedGenre] = useState<string>("");
  const dispatch = useAppDispatch();
  const { ratedMovies } = useAppSelector(getAllRatedMovies);

  // Removing duplicate movies
  const finalRatedMovies = ratedMovies.filter(
    (ele, ind) =>
      ind === ratedMovies.findIndex((elem) => elem.imdbID === ele.imdbID)
  );

  // Collecting unique genres from all the selected movies
  const genres = ratedMovies.map((movie) => {
    const res = movie.Genre.split(",");
    return res;
  });
  const initialGenres = ([] as string[]).concat.apply([], genres);
  const middleGenres = initialGenres.map((s) => s.trim());
  const finalGenres = middleGenres.filter(function (item, pos) {
    return middleGenres.indexOf(item) == pos;
  });

  useEffect(() => {
    dispatch(addGenres(finalGenres));
  }, [ratedMovies]);

  return (
    <div>
      <Container
        maxWidth="lg"
        sx={{
          paddingY: 8,
          marginY: "40px 0px",
        }}
      >
        <Filter setClickedGenre={setClickedGenre} />
        {finalRatedMovies?.length ? (
          <Grid container alignItems="stretch" spacing={4}>
            {finalRatedMovies
              .filter((movie) => movie.Genre.includes(clickedGenre))
              .map((movie) => (
                <Grid item xs={6} md={3} key={movie.imdbID}>
                  <RatedMovieCard movie={movie} />
                </Grid>
              ))}
          </Grid>
        ) : (
          <Box sx={{ textAlign: "center", paddingY: 4 }}>
            <NoContentFound />
          </Box>
        )}
      </Container>
    </div>
  );
};

export default RatingsPage;
