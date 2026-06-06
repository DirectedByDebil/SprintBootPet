import './Layout.css';
import './common.css';

import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import Box from '@mui/material/Box';

import MenuIcon from '@mui/icons-material/Menu';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ButtonChangeTheme from '../buttons/ButtonChangeTheme';

import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import Logo from './Logo';

function getHeaderInfo(location, t) {
  if (!location) {
    console.error("location is null!")
    return {title: ''};   
  }

  var title;
  const navs = [];
  switch (location.pathname) {
    case '/':
      title = t('ui.headers.pages.home_page')
      navs.push({id:'#about', label:t('ui.headers.sections.about_us')});
      navs.push({id:'#catalogue', label:t('ui.headers.sections.catalogue')});
      navs.push({id:'#reviews', label:t('ui.headers.sections.reviews')});
      navs.push({id:'#blogs', label:t('ui.headers.sections.blogs')});
      break;
    case '/store':
      title = t('ui.headers.pages.store');
      break;
    default:
      title = t('ui.headers.pages.default');
      break;
  }

  return {title: title, navs:navs};
}


function Header () {

  const [anchorElNav, setAnchorElNav] = useState(null);
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  
  const { t } = useTranslation('common');
  const location = useLocation();
  const {navs} = getHeaderInfo(location, t);

  return (
    <>
      <AppBar position='sticky'
        className='page-header'
        sx={{
          backgroundColor: 'var(--bg-header)'
        }}>
        <Container maxWidth='xl'>
          <Toolbar disableGutters sx={{ width: '100%'}}>

            {/* app bar xs */}
            <Box sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="black"
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
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {
                  navs.map((item) => (
                    <MenuItem key={item.id}>
                      <a href={item.id}>{item.label}</a>
                    </MenuItem>
                  ))
                }

              </Menu>

              <Logo />
              <ButtonChangeTheme />
            </Box>

            {/* app bar md */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

              <Logo />

              <nav className='page-navbar'>
                {
                  navs.map((item) => (
                    <Button key={item.id}>
                        <a href={item.id}>{item.label}</a>
                    </Button>
                  ))
                }
              </nav>

              <ButtonChangeTheme sx={{ml: 'auto'}} />

            </Box>
            
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Header;