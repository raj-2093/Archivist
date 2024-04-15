import React from "react";
import ThemedLink from "../NavLink/ThemedLink";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  useTheme,
} from "@mui/material";

export default function Navlink({ pages }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const theme = useTheme();

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
    <>
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
                  textShadow: `0 0 10px ${theme.palette.secondary.main}`,
                };
              } else {
                return {};
              }
            }}
            key={page.label}
            onClick={handleCloseNavMenu}
            to={page.path}
            color={theme.palette.text.primary}
          >
            {page.label}
          </ThemedLink>
        ))}
      </Box>

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
                <Typography
                  textAlign="center"
                  color={theme.palette.text.primary}
                >
                  {page.label}
                </Typography>
              </ThemedLink>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </>
  );
}
