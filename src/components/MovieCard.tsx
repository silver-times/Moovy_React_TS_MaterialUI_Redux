import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CardActionArea,
  Card,
  CardMedia,
  CardContent,
  Rating,
  Typography,
} from "@mui/material";
import { NoImage } from "../utils";
import { useAppDispatch } from "../store";
import { addRatedMovies } from "../store/ratingSlice/ratingSlice";
import { RatedMovie } from "../types";
import { getSingleMovieData } from "../API/MovieCardAPI";

const MovieCard = ({ movie }: any) => {
  const [value, setValue] = React.useState<number | null>(3);
  const [alert, setAlert] = useState(false);
  const dispatch = useAppDispatch();

  const addRatingHandler = async (value: number | null) => {
    setValue(value);
    const gen = await getSingleMovieData(movie.imdbID);

    const newMovie: RatedMovie = {
      imdbID: movie.imdbID,
      Title: movie.Title,
      Poster: movie.Poster,
      Year: movie.Year,
      Genre: gen,
      Type: movie.Type,
      Rating: value,
    };
    dispatch(addRatedMovies(newMovie));
    setAlert(true);
  };

  return (
    <div className="cardZoom">
      <Card
        sx={{
          maxWidth: 345,
          height: "100%",
          ":hover": {
            boxShadow: 40,
          },
          borderRadius: "2%",
        }}
        elevation={10}
      >
        <CardActionArea>
          <Link to={`/details/${movie.imdbID}`}>
            <CardMedia
              component="img"
              height="400"
              image={movie.Poster === "N/A" ? NoImage : movie.Poster}
              alt={movie.Title}
            />
          </Link>
        </CardActionArea>

        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography gutterBottom variant="h6" component="div">
            {movie.Title}
          </Typography>
          <Typography
            sx={{ fontFamily: "Open Sans" }}
            gutterBottom
            variant="h6"
            component="div"
          >
            {movie?.Year}
          </Typography>
          {!alert ? (
            <Rating
              name="simple-controlled"
              value={value}
              size="large"
              onChange={(e, newValue) => addRatingHandler(newValue)}
            />
          ) : (
            <Typography
              sx={{
                fontFamily: "Open Sans",
                fontSize: "14px",
              }}
              gutterBottom
              variant="overline"
              component="div"
            >
              Thankyou for Rating!
            </Typography>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default MovieCard;
