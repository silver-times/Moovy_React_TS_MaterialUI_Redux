import { Typography, Container, Box } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#5f2c3e", color: "white", p: 2 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        Moovy <span>&copy;</span>2022 By Rajat Sharma
      </Typography>
    </Box>
  );
};

export default Footer;
