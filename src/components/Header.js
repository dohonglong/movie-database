import React from "react";
import MovieIcon from "@mui/icons-material/Movie";
import {
  AppBar,
  Container,
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
  ListItemIcon,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Movie, Search, Tv, Whatshot } from "@mui/icons-material";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const menus = [
  {
    icon: <Whatshot />,
    name: "Trending",
    link: "/",
  },
  {
    icon: <Movie />,
    name: "Movies",
    link: "/movies",
  },
  {
    icon: <Tv />,
    name: "Series",
    link: "/series",
  },
  {
    icon: <Search />,
    name: "Search",
    link: "/search",
  },
];

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
        {menus.map((menu) => (
          <ListItem key={menu.name} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemIcon sx={{ minWidth: 0 }}>{menu.icon}</ListItemIcon>
              <ListItemText primary={menu.name} />
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
              {menus.map((menu) => (
                <Link to={`${menu.link}`} key={menu.name}>
                  <Button sx={{ color: "#fff" }}>
                    <Stack direction="row" alignItems="center" gap={1}>
                      {menu.icon}
                      <h2>{menu.name}</h2>
                    </Stack>
                  </Button>
                </Link>
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
