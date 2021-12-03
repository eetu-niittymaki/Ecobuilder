import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import NavigationMenu from "./NavigationMenu"
import Slide from '@mui/material/Slide';
import './Header.css';
import FaqText  from "./FaqText.js"

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const Header = () => {
  // Reused code for Dialog, very stupid bad, not good
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

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
                <span style={{color: "#3a72bd", marginTop: "-5%"}}>Building 
                  <span style={{fontWeight: "bold"}}> eco</span>nomically & 
                  <span style={{fontWeight: "bold"}}> eco</span>logically!
                  <IconButton aria-label="Info">
                    <InfoOutlinedIcon sx={{color: "#008ae6"}} onClick={handleClickOpen} />
                    
                  </IconButton>
                </span>
              </Typography>
              <a href="https://www.bayern.de/">
                <img src="../bayer.png" height="auto"/>
              </a>
            </div>
            
        </Toolbar>
      </AppBar>
      <Dialog
        open={open}
        transitionComponent={Transition}
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth="lg"
      >
        <DialogTitle>{"FAQ"}</DialogTitle>
          <DialogContent>
            <img src="./faq.png" width="100%"/>
            <DialogContentText id="alert-dialog-slide-description">
              <FaqText />
            </DialogContentText>
          </DialogContent>
      </Dialog>
    </Box>
    
  )
}
export default Header;
