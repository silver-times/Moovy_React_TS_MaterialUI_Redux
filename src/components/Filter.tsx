import { useAppSelector } from "../store";
import { getAllRatedMovies } from "../store/ratingSlice/ratingSlice";
import { Button, Box, Typography } from "@mui/material";
import React from "react";

type FilterProps = {
  setClickedGenre: React.Dispatch<React.SetStateAction<string>>;
};

const Filter = ({ setClickedGenre }: FilterProps) => {
  const { uniqueGenres } = useAppSelector(getAllRatedMovies);
  let finalGenres = uniqueGenres[uniqueGenres.length - 1];

  const handleClickedGenre = (e: React.ChangeEvent<unknown>) => {
    setClickedGenre((e.target as HTMLInputElement).value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <Typography
        sx={{ textAlign: "center", marginBottom: 2 }}
        variant="h4"
        color="text.secondary"
      >
        CATEGORIES
      </Typography>
      <Box
        sx={{
          marginBottom: "40px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {finalGenres?.length ? (
          finalGenres.map((genre: string) => (
            <Button
              onClick={handleClickedGenre}
              key={Math.random()}
              variant="contained"
              value={genre}
            >
              {genre}
            </Button>
          ))
        ) : (
          <h1>No Movies Yet!</h1>
        )}
      </Box>
    </Box>
  );
};

export default Filter;
