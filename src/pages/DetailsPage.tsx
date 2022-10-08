import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Movie } from "../types";
import { Container } from "@mui/system";
import { Box, Toolbar, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { SinglePageMovie } from "../types";
import Rating from "@mui/material/Rating";

const DetailsPage = () => {
  const { imdbID } = useParams();
  const [singleMovie, setSingleMovie] = useState<SinglePageMovie>();
  const [value, setValue] = useState<number | null>(4);

  const getSingleMovieData = async () => {
    const URL = `http://www.omdbapi.com/?apikey=991f5194&i=${imdbID}`;
    const res = await axios.get(URL);
    setSingleMovie(res.data);
    // return res.data.Search;
    // dispatch(addMovies(res.data.Search));
  };

  getSingleMovieData();

  return (
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
          image={singleMovie?.Poster}
          sx={{ objectFit: "contain", marginTop: "30px" }}
          alt={singleMovie?.Title}
        />
        <Rating
          name="simple-controlled"
          value={value}
          size="large"
          sx={{ marginTop: 5 }}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <Typography
          sx={{ fontFamily: "Open Sans", marginBottom: 5 }}
          gutterBottom
          variant="h5"
          component="div"
        >
          Rate the movie!
        </Typography>
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
  );
};

export default DetailsPage;
