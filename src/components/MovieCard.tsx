import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { MovieListType } from "../types/index";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Rating from "@mui/material/Rating";
import { CardActionArea } from "@mui/material";
import { Box, Toolbar, Typography } from "@mui/material";
import { NoImage } from "../utils";
import { useDispatch } from "react-redux";
import { addRatedMovies } from "../store/ratingSlice/ratingSlice";
import { RatedMovie } from "../types";

const MovieCard = ({ movie }: any) => {
  const [value, setValue] = React.useState<number | null>(4);
  const [alert, setAlert] = useState(false);
  const dispatch = useDispatch();

  const getSingleMovieData = async (id: number) => {
    const URL = `http://www.omdbapi.com/?apikey=991f5194&i=${id}`;
    const res = await axios.get(URL);
    const gen = res.data.Genre;
    return gen;
    // return res.data.Search;
    // dispatch(addMovies(res.data.Search));
  };

  const addRatingHandler = async (value: number | null) => {
    setValue(value);
    const gen = await getSingleMovieData(movie.imdbID);
    console.log(gen);

    const newMovie: RatedMovie = {
      imdbID: movie.imdbID,
      Title: movie.Title,
      Poster: movie.Poster,
      Year: movie.Year,
      Genre: gen,
      Type: movie.Type,
      Rating: value,
    };
    console.log(newMovie);
    dispatch(addRatedMovies(newMovie));
    setAlert(true);
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        height: "100%",
        ":hover": {
          boxShadow: 20, // theme.shadows[20]
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
            sx={{ fontFamily: "Open Sans", fontSize: "14px", marginBottom: 5 }}
            gutterBottom
            variant="overline"
            component="div"
          >
            Thankyou for Rating!
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default MovieCard;
