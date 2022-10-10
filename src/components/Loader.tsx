import LoaderHelper from "./LoaderHelper/LoaderHelper";
import { Box, Typography } from "@mui/material";

const Loader = () => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <LoaderHelper />
      <Typography
        sx={{ fontFamily: "Open Sans" }}
        gutterBottom
        variant="h4"
        component="div"
      >
        ...LOADING...
      </Typography>
    </Box>
  );
};

export default Loader;
