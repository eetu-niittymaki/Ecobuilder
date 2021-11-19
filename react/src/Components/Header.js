import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import NavigationMenu from "./NavigationMenu"

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 ,}}>
    <AppBar position="static"
            sx={{backgroundColor: "white",}}>
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
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, height: "60%" }}>
          <div className="header">
            <img src="../ecobuilderLogo2.jpg"
            />
            <Link to="/" style={{ textDecoration: 'none' }}><span>ecobuilder</span></Link>
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
