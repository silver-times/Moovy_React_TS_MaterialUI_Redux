import NoContentFound from "../components/NoContentFound";
import { Typography, Box } from "@mui/material";

const NotFoundPage = () => {
  return (
    <Box sx={{ textAlign: "center", paddingY: 8 }}>
      <NoContentFound />
      <Typography variant="h2" color="text.secondary">
        404 Page Not Found!
      </Typography>
    </Box>
  );
};

export default NotFoundPage;
