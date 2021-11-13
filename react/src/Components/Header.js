import React from 'react';
import './Header.css';
import {  Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NavigationMenu from "./NavigationMenu"

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 ,}}>
    <AppBar position="static"
            sx={{backgroundColor: "white"}}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="default"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
        <NavigationMenu/>
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <div className="header">
            <img src="../logo.png"
            />
            <span>ecobuilder</span>
            <a href="https://www.bayern.de/">
              <img src="../bayer.png"/>
            </a>
          </div>
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
  )
}
export default Header;
/*
<div className="header">
  <span>ecobuilder</span>
</div>
*/