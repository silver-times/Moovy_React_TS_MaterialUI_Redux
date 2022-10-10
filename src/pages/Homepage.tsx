import { Container, Box, Typography } from "@mui/material";
import SearchedMovies from "../components/SearchedMovies";
import WelcomeComponent from "../components/WelcomeComponent";
import NoContentFound from "../components/NoContentFound";

const Homepage = () => {
  return (
    <div>
      <Container
        maxWidth="lg"
        sx={{
          marginY: 4,
        }}
      >
        <SearchedMovies />
      </Container>
    </div>
  );
};

export default Homepage;
