import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import MuiLink from '../themes/themed_components/ThemedLink';
import ThemedLink from '../themes/themed_components/ThemedLink';
import { LightMode } from '@mui/icons-material';
import { Switch } from '@mui/material';
import { DarkModeRounded, LightModeRounded } from "@mui/icons-material";


function Navbar({switchTheme,icon}) {

  const pages = ['Explore', 'Clubs', 'About'];
  
  // const [toggleSettingText, setToggleSettingText] = React.useState('Switch to Light Mode')
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout', 'Switch to Light Mode'];

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
          <ThemedLink to={"/"}>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 3,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Ac
          </Typography>
          </ThemedLink>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <ThemedLink to={`/${page}`}>
                  <Typography textAlign="center">
                    {page}
                  </Typography>
                  </ThemedLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <ThemedLink>
          <Typography
            variant="h5"
            noWrap
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Ac
          </Typography>
          </ThemedLink>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap:"12px"}}>
            {pages.map((page) => (
              <ThemedLink
                key={page}
                onClick={handleCloseNavMenu}
                to={`/${page}`}
              >
                {page}
              </ThemedLink>
            ))}
          </Box>

              
          <Box sx={{ display: 'flex', flexGrow: 0, alignItems: 'center', gap:'12px'}}>
            <IconButton onClick={switchTheme} sx={{
              color: 'white'
            }}>
                        {icon=='LightModeRounded' ? <LightModeRounded/> : <DarkModeRounded/>}
            </IconButton>
            <ThemedLink to={"/SignUp"}>SignUp</ThemedLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
