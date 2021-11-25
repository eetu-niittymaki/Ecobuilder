import React from 'react';
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import NavigationMenu from "./NavigationMenu"
import './Header.css';

const Header = () => {
  return (
    <Box sx={{ display: "flex", flexGrow: 1 }}>
      <AppBar position="static"
              sx={{ backgroundColor: "white"}}>
        <Toolbar className="navBox">
          <NavigationMenu className="navButton"/>
            <div className="header" style={{ display: "flex", flexGrow: 1, justifyContent: "space-evenly", }}>
              <img src="../logo.png"/>
              <Typography variant="h6" component="div" sx={{  height: "60%", marginTop: "0%" }}>
                <Link to="/" style={{ textDecoration: 'none' }}><span className="title" >ecobuilder</span></Link>
              </Typography>
              <a href="https://www.bayern.de/">
                <img src="../bayer.png" height="auto"/>
              </a>
            </div>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
export default Header;
