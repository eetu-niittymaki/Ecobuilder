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
                                coords = "840,120, 1080,220" /></Link>
                        <Link to="/technical/wand"><area shape="rect" alt="wand"
                                coords = "940,495, 1210,670" /></Link>
                        <Link to="/technical/betrieb"><area shape="rect" alt="betrieb"
                                coords = "620,90, 830,165" /></Link>
                        <Link to="/technical/dach"><area shape="rect" alt="dach"
                                coords = "450,10, 695,80" /></Link>
                        <Link to="/technical/balkon"><area shape="rect" alt="balkon"
                                coords = "110,30, 330,125" /></Link>
                        <Link to="/technical/fundament"><area shape="rect" alt="fundament"
                                coords = "460,520, 740,690" /></Link>
                        <Link to="/technical/brandschutz"><area shape="rect" alt="brandschutz"
                                coords = "50,500, 380,675" /></Link>
                    </map>
            </Box>
            <div className="infoText"><h1><InfoOutlinedIcon sx={{color: "#008ae6"}}/> Click on the icons to get more information on the topics you are interested in!</h1></div>
    </div>
    )
}
