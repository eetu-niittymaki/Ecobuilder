import * as React from 'react'
import Box from '@mui/material/Box'
import Header from "../../Components/Header.js"
import SvgButton from "../../Components/SvgButton.js"
import Button from '@mui/material/Button';
import "./TechnicalPages.css"

const onClick = () => {
    alert("Nothing here yet :(")
}

export default function Wand() {
  return (
    <div>
    <Header/>   
    <Box sx={{ marginTop: "1%", display: 'inline-flex', 
                justifyContent: "center", width: "100%" }}>
        <div style={{ backgroundImage: "url(../wand/wand_wall.png)", 
                        backgroundSize: "cover",
                        height: "90vh",
                        width: "20%",
                        }}>
        </div>
        <div>
            <img src="../wand/wand_icon.png" width="auto" height="auto" float="left"/> 
            <div>
                <h1>Your ideas could stand right here!</h1>
            </div>
            <Button variant="outlined" onClick={onClick} style={{position: "relative", 
                                                width: "30%", height: "10%",
                                                left: "35%", marginBottom: "5%"}}>share ideas</Button>
            <div>
                <img src="../wand/wand_footer.png" width="auto" height="auto" top="20%"/> 
            </div> 
        </div>    
    </Box>
    </div>
  );
}