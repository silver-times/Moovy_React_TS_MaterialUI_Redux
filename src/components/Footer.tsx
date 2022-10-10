import { Typography, Toolbar, AppBar } from "@mui/material";

const Footer = () => {
  return (
    <AppBar position="sticky" sx={{ paddingY: 2 }}>
      <Toolbar
        sx={{
          justifyContent: "space-around",
          bgcolor: "#5f2c3e",
          color: "white",
          p: 2,
        }}
      >
        <Typography variant="h6" align="center" gutterBottom>
          Moovy<span>&copy;</span>2022 by RAJAT SHARMA
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
