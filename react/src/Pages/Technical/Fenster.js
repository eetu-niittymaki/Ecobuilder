import * as React from 'react'
import Box from '@mui/material/Box'
import Header from "../../Components/Header.js"
import { Link } from 'react-router-dom'
import "./TechnicalPages.css"

const onClick = () => {
    alert("Nothing here yet :(")
}

export default function Fenster() {
  return (
    <div className="container">
    <Header/>   
    <Box sx={{ marginTop: "1%", display: 'inline-flex', 
                justifyContent: "center", width: "100%" }}>
        <div style={{ backgroundImage: "url(../fenster/fenster_window.png)", 
                        backgroundSize: "cover",
                        height: "90vh",
                        width: "20%",}}>
        </div>
        <div>
            <div style={{marginBottom: "10%", marginLeft: "10%", fontSize: "120%"}}>
                <img src="../fenster/fenster_icon.png" width="auto" height="auto" style={{marginTop: "5%"}}/> 
                    <div style={{marginTop: "10%", }}> 
                        <Link to="/" style={{textDecoration: "none"}}><h2>U-Wert-/g-Wert-Optimierung</h2></Link>
                        <Link to="/" style={{textDecoration: "none"}}><h2>Optimierung das Rahmenanteils</h2></Link>
                        <Link to="/" style={{textDecoration: "none"}}><h2>Optimierung der Fenstergröße und Ausrichtung</h2></Link>
                    </div>
            </div>
            <div style={{marginTop: "17%"}}>
                <img src="../fenster/fenster_footer.png" width="auto" height="auto"/> 
            </div> 
        </div>    
    </Box>
    </div>
  );
}