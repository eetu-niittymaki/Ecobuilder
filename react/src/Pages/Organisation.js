import React from 'react'
import Header from '../Components/Header.js'
import Box from '@mui/material/Box';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import "./Organisation.css"

export default  function Organisation() {
    return (
        <div>
            <Header/>
            <Box sx={{marginTop: "2%"}}>
                <img src="./organisational_background.jpg" usemap="#organisational" className="background" />
                    <map className="map" name="planning">
                        <Link to="/technical/fenster"><area shape="rect" alt="fenster"
                                coords = "915,150, 980,220" /></Link>
                        <Link to="/technical/wand"><area shape="rect" alt="wand"
                                coords = "1030,595, 1110,670" /></Link>
                        <Link to="/technical/betrieb"><area shape="rect" alt="betrieb"
                                coords = "690,90, 760,165" /></Link>
                        <Link to="/technical/dach"><area shape="rect" alt="dach"
                                coords = "520,10, 610,85" /></Link>
                        <Link to="/technical/balkon"><area shape="rect" alt="balkon"
                                coords = "120,50, 200,125" /></Link>
                        <Link to="/technical/fundament"><area shape="rect" alt="fundament"
                                coords = "530,615, 610,690" /></Link>
                        <Link to="/technical/brandschutz"><area shape="rect" alt="brandschutz"
                                coords = "80,600, 170,675" /></Link>
                    </map>
            </Box>
            <div className="infoText"><h1><InfoOutlinedIcon sx={{color: "#008ae6"}}/> Click on the icons to get more information on the topics you are interested in!</h1></div>
    </div>
    )
}