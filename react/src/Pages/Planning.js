import React from 'react'
import Header from '../Components/Header.js'
import Box from '@mui/material/Box';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import "./Planning.css"

export default  function Planning() {
    return (
        <div>
            <Header/>
            <Box sx={{marginTop: "2%"}}>
                <img src="./planning_background.png" usemap="#planning" className="background" />
                    <map className="map" name="planning">
                        <Link to="/planning/grundriss"><area shape="rect" alt="grundriss"
                                coords = "115,30, 360,100" /></Link>
                        <Link to="/planning/gesatsystem"><area shape="rect" alt="gesamtsystem"
                                coords = "390,30, 700,80" /></Link>
                        <Link to="/technical/brandschutz"><area shape="rect" alt="brandschutz"
                                coords = "745,20, 1080,100" /></Link>
                        <Link to="/technical/betrieb"><area shape="rect" alt="betrieb"
                                coords = "10,600, 220,500" /></Link>
                        <Link to="/planning/heizung"><area shape="rect" alt="heizung"
                                coords = "260,1000, 470,500" /></Link>
                        <Link to="/planning/kuhlung"><area shape="rect" alt="kühlung"
                                coords = "560,1000, 870,520" /></Link>
                        <Link to="/planning/luftung"><area shape="rect" alt="lüftung"
                                coords = "850,480, 1070,545" /></Link>
                    </map>
            </Box>
            <div className="infoText"><h1><InfoOutlinedIcon sx={{color: "#008ae6"}}/> Click on the icons to get more information on the topics you are interested in!</h1></div>
    </div>
    )
}