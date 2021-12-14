import React from 'react';
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import NavigationMenu from "./NavigationMenu"
import ModalInfo from "./ModalInfo"
import './Header.css';

const Header = () => {
  return (
    <Box sx={{ display: "flex", flexGrow: 1 }}>
      <AppBar position="static"
              sx={{ backgroundColor: "white"}}>
        <Toolbar className="navBox"> 
          <NavigationMenu/>
            <div className="header" style={{ display: "flex", flexGrow: 1, justifyContent: "space-evenly", }}>
              <img src="../logo.png" height="90%"/>
              <Typography variant="h6" component="div" sx={{  display: "flex", flexDirection: "column", height: "100%" }}>
                <Link to="/" style={{ textDecoration: 'none' }}><span className="title" >ecobuilder</span></Link>
                <span style={{color: "#3a72bd", marginTop: "-5%", display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                  <span><span style={{fontWeight: "bold"}}>Öko</span>nomisch &</span>
                  <span><span style={{fontWeight: "bold"}}>öko</span>logisch bauen!</span>
                  <ModalInfo />
                </span>
                
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
