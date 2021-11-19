import React from 'react'
import Header from '../Components/Header.js'
import Box from '@mui/material/Box';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import "./Organisational.css"

export default  function Organisational() {
    return (
        <div>
            <Header/>
            <Box sx={{marginTop: "2%"}}>
                <img src="./organisational_background.jpg" usemap="#organisational" className="background" />
                    <map className="map" name="organisational">
                        <Link to="/organisational/ausschbreibung"><area shape="rect" alt="ausschbreibung"
                                coords = "440,75, 700,135" /></Link>
                        <Link to="/organisational/marktanalyse"><area shape="rect" alt="marktanalyse"
                                coords = "100,490, 370,555" /></Link>
                        <Link to="/organisational/qualitatsmanagement"><area shape="rect" alt="qualitatsmanagement"
                                coords = "680,490, 1040,555" /></Link>
                        <Link to="/organisational/vorfertigung"><area shape="rect" alt="vorfertigung"
                                coords = "30,40, 280,115" /></Link>
                        <Link to="/organisational/zeitmanagement"><area shape="rect" alt="zeitmanagement"
                                coords = "830,90, 1100,160" /></Link>
                        <Link to="/technical/betrieb"><area shape="rect" alt="betrieb"
                                coords = "430,490, 600,555" /></Link>
                    </map>
            </Box>
            <div className="infoText"><h1><InfoOutlinedIcon sx={{color: "#008ae6"}}/> Click on the icons to get more information on the topics you are interested in!</h1></div>
    </div>
    )
}