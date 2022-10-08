import React from "react";
import { Link } from "react-router-dom";
// import { MovieListType } from "../types/index";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Rating from "@mui/material/Rating";
import { CardActionArea } from "@mui/material";
import { Box, Toolbar, Typography } from "@mui/material";

const MovieCard = ({ movie }: any) => {
  const [value, setValue] = React.useState<number | null>(4);

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
            image={movie.Poster}
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
        <Rating
          name="simple-controlled"
          value={value}
          size="large"
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </CardContent>
    </Card>
  );
};

export default MovieCard;
