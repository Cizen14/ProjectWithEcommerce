import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material'
import React from 'react'
import img1 from '../assets/logo.png'
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';

import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {auth } from '../Firebase-config'
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import { setUserInfo } from '../../redux/Auth/authSlice';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
    // const pages = ['dashboard','Products', 'CreateUser', 'Review'];
    const newpages = [
      { title: 'dashboard', href: "/" },
      { title: 'Products', href: "/products" }, 
      { title: 'CreateUser', href: "/signup" }, 
      { title: 'Review', href: "/review" }
    ]
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
        const handleLogout=()=>{
          signOut(auth). then(()=>{
            dispatch(setUserInfo({}));
            navigate('/login');
          })
          .catch((e) => {
            toast.error(e.message)
          })
       
          

        }

      const authPage = location.pathname === '/login' || location.pathname === '/signup';

      if(authPage){
        return( <AppBar  sx={{ position:'fixed',background: 'linear-gradient( to right, #93A5CF, #E2D1C3)', width:'100%', paddingRight:'20px'}}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
            <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              m: "auto",
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
             
            }}
          >
            <div className='logoforauth'>
            <img  src={img1} alt='img' />
            </div>
          </Typography>

            </Toolbar>
          </Container>
        </AppBar>

        );
      }

  return (
   
    <AppBar sx={{ background: 'linear-gradient( to right, #93A5CF, #E2D1C3)', width:'100%', paddingRight:'20px'}}>
      
        <Toolbar disableGutters>
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
             
            }}
          >
            <img className='logoimg' src={img1} alt='img'/>
          </Typography>

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
              {newpages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent:'flex-end'} }}>
            {newpages.map((page) => (
              <Button
                key={page.title}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                component={Link}
                to={page.href}
                // to={page.toLowerCase()=== 'createuser' ? '/signup' : `/${page.toLowerCase()}` }
               
               >
                {page.title}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="C" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              
                <MenuItem  onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                 
                  <Button sx={{ color: 'red' }} onClick={handleLogout}>
                  Sign out
                  </Button>
                  
              
                  </Typography>
                </MenuItem>
             
            </Menu>
          </Box>
        </Toolbar>

       
      
    </AppBar>
   
      )
}

export default Header
