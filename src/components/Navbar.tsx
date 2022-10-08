import { Link as RouterLink } from "react-router-dom";
import { Typography, AppBar, Toolbar, Stack, Divider } from "@mui/material";
import Link from "@mui/material/Link";
import MovieCreationRoundedIcon from "@mui/icons-material/MovieCreationRounded";

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ paddingY: 2 }}>
      <Toolbar sx={{ justifyContent: "space-around" }}>
        <Link
          component={RouterLink}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            color: "white",
            alignItems: "center",
            textDecoration: "none",
          }}
          to="/"
        >
          <MovieCreationRoundedIcon sx={{ fontSize: 80 }} />
          <Typography
            variant="h2"
            component="div"
            sx={{ flexGrow: 1, fontFamily: "Fascinate" }}
          >
            Moovy
          </Typography>
        </Link>
        <Stack direction="row" spacing={2}>
          <RouterLink
            to="/"
            style={{ textDecoration: "none", color: "white", fontSize: 20 }}
          >
            Home
          </RouterLink>
          <Divider
            color="white"
            orientation="vertical"
            variant="middle"
            flexItem
          />
          <RouterLink
            to="/ratings"
            style={{ textDecoration: "none", color: "white", fontSize: 20 }}
          >
            Ratings
          </RouterLink>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
