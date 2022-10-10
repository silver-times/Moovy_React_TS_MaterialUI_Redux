import { Container, Box, Typography } from "@mui/material";
import SearchedMovies from "../components/SearchedMovies";

const Homepage = () => {
  return (
    <div>
      <Container
        maxWidth="lg"
        sx={{
          paddingY: 4,
        }}
      >
        <SearchedMovies />
      </Container>
    </div>
  );
};

export default Homepage;
