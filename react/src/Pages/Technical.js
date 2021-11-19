import React from 'react'
import Header from '../Components/Header.js'
import Box from '@mui/material/Box';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import "./Technical.css"

export default  function Technical() {
    return (
        <div>
            <Header/>

            <Box sx={{marginTop: "2%"}}>
                <img src="./technical_background.png" usemap="#technical" className="background" />
                    <map className="map" name="technical">
                        <Link to="/technical/fenster"><area shape="rect" alt="fenster"
                                coords = "915,150, 980,220" /></Link>
                        <Link to="/technical/wand"><area shape="rect" alt="wand"
                                coords = "1030,595, 1110,670" /></Link>
                    </map>
            </Box>
            <div className="infoText"><h1><InfoOutlinedIcon sx={{color: "#008ae6"}}/> Click on the icons to get more information on the topics you are interested in!</h1></div>
    </div>
    )
}
