import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container } from "@mui/system";
import {
  Box,
  Card,
  Rating,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { SinglePageMovie } from "../types";
import { NoImage } from "../utils";
// slice
import {
  loadingOn,
  loadingOff,
  loadingState,
} from "../store/loadingSlice/loadingSlice";
import { useAppDispatch, useAppSelector } from "../store";
import { addRatedMovies } from "../store/ratingSlice/ratingSlice";
import Loader from "../components/Loader";

const DetailsPage = () => {
  const { imdbID } = useParams();
  const [singleMovie, setSingleMovie] = useState<SinglePageMovie>();
  const [value, setValue] = useState<number | null>(4);
  const [alert, setAlert] = useState(false);
  const dispatch = useAppDispatch();
  const loading = useAppSelector(loadingState);

  const getSingleMovieData = async (imdbID: string | undefined) => {
    dispatch(loadingOn());
    const URL = `http://www.omdbapi.com/?apikey=991f5194&i=${imdbID}`;
    const res = await axios.get(URL);
    const movie = res.data;
    setSingleMovie(movie);
    dispatch(addRatedMovies(movie));
    dispatch(loadingOff());
  };

  const addRatingHandler = (value: any) => {
    setValue(value);
    setAlert(true);
  };

  useEffect(() => {
    getSingleMovieData(imdbID);
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <Container
          maxWidth="lg"
          sx={{
            marginY: "100px",
            marginX: "auto",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            width: "100vw",
            height: "100%",
          }}
        >
          <Card
            sx={{
              width: "30%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CardMedia
              component="img"
              height="440"
              width="300"
              image={
                singleMovie?.Poster === "N/A" ? NoImage : singleMovie?.Poster
              }
              sx={{ objectFit: "contain", marginTop: "30px" }}
              alt={singleMovie?.Title}
            />
            {!alert ? (
              <div>
                <Rating
                  name="simple-controlled"
                  value={value}
                  size="large"
                  sx={{ marginTop: 5 }}
                  onChange={(e, newValue) => addRatingHandler(newValue)}
                />
                <Typography
                  sx={{ fontFamily: "Open Sans", marginBottom: 5 }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Rate the movie!
                </Typography>
              </div>
            ) : (
              <Typography
                sx={{
                  fontFamily: "Open Sans",
                  fontSize: "20px",
                  marginBottom: 5,
                }}
                gutterBottom
                variant="overline"
                component="div"
              >
                Thankyou for Rating!
              </Typography>
            )}
          </Card>
          <Card
            sx={{
              width: "70%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <CardContent>
              <Typography
                sx={{ fontFamily: "Open Sans" }}
                gutterBottom
                variant="h2"
                component="div"
              >
                {singleMovie?.Title}
              </Typography>
              <Typography
                sx={{ fontFamily: "Open Sans", marginBottom: 5 }}
                gutterBottom
                variant="h6"
                component="div"
              >
                <em>{singleMovie?.Genre}</em>
              </Typography>
              <Typography
                sx={{ fontFamily: "Open Sans", fontSize: 20 }}
                variant="body1"
                color="text.secondary"
              >
                {singleMovie?.Plot}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: 6,
                }}
              >
                <Typography
                  sx={{ fontFamily: "Open Sans" }}
                  gutterBottom
                  variant="h6"
                  component="div"
                >
                  Language: {singleMovie?.Language}
                </Typography>
                <Typography
                  sx={{ fontFamily: "Open Sans" }}
                  gutterBottom
                  variant="h6"
                  component="div"
                >
                  Released: {singleMovie?.Released}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Container>
      )}
    </div>
  );
};

export default DetailsPage;
