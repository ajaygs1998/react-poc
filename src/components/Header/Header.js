// src/components/Header/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
const Header = () => {
  return (

    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" color="primary"sx={{ flexGrow: 1 }}>
          <Link component={RouterLink} to="/" color="inherit" style={{ textDecoration: 'none' }}>
       Lead Gen Platform
          </Link>
        </Typography>
        
        <Button color="inherit" component={Link} to="/login">
          Login
        </Button>
        <Button color="inherit" component={Link} to="/register">
          Register
        </Button>
      </Toolbar>

    </AppBar>
  );
};

export default Header;
