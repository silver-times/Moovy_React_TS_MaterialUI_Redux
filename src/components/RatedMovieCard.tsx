import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import { RatedMovie } from "../types";
import CardContent from "@mui/material/CardContent";
import { Box, Toolbar, Typography } from "@mui/material";
import { NoImage } from "../utils";
import Rating from "@mui/material/Rating";
import Container from "@mui/material/Container";

const RatedMovieCard = ({ movie }: any) => {
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
      <CardMedia
        component="img"
        height="400"
        image={movie.Poster === "N/A" ? NoImage : movie.Poster}
        alt={movie.Title}
      />

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
        <Rating name="read-only" value={movie?.Rating} readOnly />
      </CardContent>
    </Card>
  );
};

export default RatedMovieCard;
