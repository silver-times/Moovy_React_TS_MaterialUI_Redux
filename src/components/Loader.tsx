import React from "react";
import LoaderComponent from "./LoaderComponent/LoaderComponent";
import { Box, Typography } from "@mui/material";

const Loader = () => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <LoaderComponent />
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
