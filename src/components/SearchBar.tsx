import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

type SearchBarProps = {
  setSearchedMovie: React.Dispatch<React.SetStateAction<string>>;
  setSearchedYear: React.Dispatch<React.SetStateAction<string>>;
};
const SearchBar = ({ setSearchedMovie, setSearchedYear }: SearchBarProps) => {
  const [movieField, setMovieField] = useState("");
  const [yearField, setYearField] = useState("");

  const searchTermHandler = (e: React.FormEvent) => {
    e.preventDefault();

    setSearchedMovie(movieField);
    setSearchedYear(yearField);

    setMovieField("");
    setYearField("");
  };

  return (
    <Box sx={{ marginY: "40px" }}>
      <form id="form-inputs" onSubmit={searchTermHandler}>
        <TextField
          id="outlined-basic"
          variant="filled"
          required
          label="Enter movie title"
          value={movieField}
          onChange={(e) => setMovieField(e.target.value)}
          sx={{ width: "50%", color: "white !important" }}
          inputProps={{
            style: { fontSize: 25 },
          }}
        />
        <TextField
          id="outlined-basic"
          variant="filled"
          label="Enter year of release"
          value={yearField}
          onChange={(e) => setYearField(e.target.value)}
          sx={{ width: "50%", marginLeft: 1 }}
          inputProps={{
            style: { fontSize: 25 },
          }}
        />
        <Button
          variant="contained"
          size="large"
          type="submit"
          endIcon={<SearchIcon />}
          sx={{ marginLeft: 1, PaddingX: 3 }}
        >
          Search
        </Button>
      </form>
    </Box>
  );
};

export default SearchBar;
