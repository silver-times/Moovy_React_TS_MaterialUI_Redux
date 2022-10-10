import NoContentFound from "../components/NoContentFound";
import { Typography, Box } from "@mui/material";

const ErrorComponent = () => {
  return (
    <Box sx={{ textAlign: "center", paddingY: 4 }}>
      <NoContentFound />
      <Typography variant="h2" color="text.secondary">
        Welcome!
      </Typography>
    </Box>
  );
};

export default ErrorComponent;
