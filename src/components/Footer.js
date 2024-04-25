import React from "react";
import MovieIcon from "@mui/icons-material/Movie";
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";

const Footer = () => {
  const menus = ["Trending", "Movies", "Series", "Search"];
  return (
    <AppBar>
      <Container
        maxWidth={false}
        // disableGutters
        sx={{
          // height: "80px",
          background: "#87CEEB",
          position: "fixed",

          bottom: 0,
        }}
      >
        <Grid container justifyContent="center">
          <Toolbar style={{ width: "70%" }}>
            {menus.map((menu) => {
              return (
                <Box
                  key={menu}
                  align="center"
                  width="100%"
                  border="1px solid black"
                >
                  <Button variant="contained">
                    <Typography variant="h6">
                      <MovieIcon />
                      <br />
                      {menu}
                    </Typography>
                  </Button>
                </Box>
              );
            })}
          </Toolbar>
        </Grid>
        {/* <Grid container justifyContent="center">
        <h1>
          <MovieIcon /> FOOTER
        </h1>
      </Grid> */}
      </Container>
    </AppBar>
  );
};

export default Footer;
