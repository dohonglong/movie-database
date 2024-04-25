import React from "react";
import MovieIcon from "@mui/icons-material/Movie";
import {
  AppBar,
  Container,
  // Grid,
  Box,
  IconButton,
  Button,
  Typography,
  Toolbar,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;
const navItems = ["Trending", "Movies", "TV Series", "Search"];

const Header = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h4" sx={{ my: 2 }}>
        MENU
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" component="nav">
        <Container
          maxWidth={false}
          style={{ background: "blue", position: "fixed" }}
        >
          <Toolbar>
            {/* MAIN TITLE */}
            <Typography
              component="div"
              sx={{
                flexGrow: 1,
                display: { sm: "block" },
              }}
            >
              <h1>
                <MovieIcon /> MOVIE LIST
              </h1>
            </Typography>

            {/* THE ICON BUTTON WHEN SCREEN IS SMALL */}
            <IconButton
              size="large"
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                marginRight: 2,
                float: "right",
                display: { xs: "block", sm: "block", lg: "none" },
              }}
            >
              <MenuIcon />
            </IconButton>

            {/* MENU BAR */}
            <Box sx={{ display: { xs: "none", sm: "none", lg: "block" } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: "#fff" }}>
                  <h2>{item}</h2>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <nav>
        <Drawer
          anchor="right"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Header;
