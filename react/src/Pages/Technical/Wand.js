import * as React from 'react'
import Box from '@mui/material/Box'
import Header from "../../Components/Header.js"
import Button from '@mui/material/Button';
import "./TechnicalPages.css"

const onClick = () => {
    alert("Nothing here yet :(")
}

export default function Wand() {
  return (
    <div className="container">
    <Header/>   
    <Box className="pageBox">
        <div style={{ backgroundImage: "url(../tech/wand/wand.png)" }}
            className="backgroundImg">
        </div>
        <div>
            <img src="../tech/wand/wand_icon.png"  className="icon" /> 
            <div>
                <h1>Your ideas could stand right here!</h1>
            </div>
            <Button variant="outlined" onClick={onClick} style={{position: "relative", 
                                                width: "30%", height: "10%",
                                                left: "35%", marginBottom: "5%"}}>share ideas</Button>
            <div>
                <img src="../tech/wand/wand_footer.png" className="footerImg"/> 
            </div> 
        </div>    
    </Box>
    </div>
  );
}