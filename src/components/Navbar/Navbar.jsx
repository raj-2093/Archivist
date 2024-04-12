import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import ThemedLink from "../NavLink/ThemedLink";
import ToggleThemeButton from "../ToggleThemeButton/ToggleThemeButton";
import logo from "../../assets/images/ARLogo.png";

function Navbar({ home, pages }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ThemedLink
            to={home}
            sx={{
              width: "60px",
            }}
          >
            <Typography
              variant="h6"
              noWrap
              sx={{
                display: "flex",
                mr: 3,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                verticalAlign: "middle",
              }}
            >
              <img src={logo} width={"100%"} />
            </Typography>
          </ThemedLink>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                  <ThemedLink to={page.path}>
                    <Typography textAlign="center" color={"black"}>
                      {page.label}
                    </Typography>
                  </ThemedLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              gap: "25px",
            }}
          >
            {pages.map((page) => (
              <ThemedLink
                style={({ isActive }) => {
                  if (isActive) {
                    return {
                      textShadow: "0 0 10px white",
                    };
                  } else {
                    return {};
                  }
                }}
                key={page.label}
                onClick={handleCloseNavMenu}
                to={page.path}
              >
                {page.label}
              </ThemedLink>
            ))}
          </Box>

          <Box
            sx={{
              display: "flex",
              flexGrow: 0,
              alignItems: "center",
              gap: "12px",
            }}
          >
            <ToggleThemeButton />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
