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
import { useTheme } from "@mui/material";
import Navlink from "./Navlink";
import BrandLogo from "./BrandLogo";

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
          <BrandLogo home={home} />

          <Navlink pages={pages} />

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
