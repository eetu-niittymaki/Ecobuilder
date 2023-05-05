import React, { useState, useEffect } from 'react'
import Header from '../Components/Header.js'
import Box from '@mui/material/Box';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useNavigate } from "react-router-dom";
import ImageMapper from 'react-image-mapper';
import "./Organisational.css"

const MAP = {
    name: 'organisational',
    areas: [
        { name: "ausschreibung", shape: "rect", coords: [435,70, 700,140], preFillColor: "rgba(255, 255, 255, 0.0)", strokeColor: "#008ae6"},
        { name: "marktanalyse", shape: "rect", coords: [95,490, 365,565], preFillColor: "rgba(255, 255, 255, 0.0)", strokeColor: "#008ae6"},
        { name: "qualitatsmanagement", shape: "rect", coords: [680,485, 1050,560], preFillColor: "rgba(255, 255, 255, 0.0)", strokeColor: "#008ae6"},
        { name: "vorfertigung", shape: "rect", coords: [30,30, 290,115], preFillColor: "rgba(255, 255, 255, 0.0)", strokeColor: "#008ae6"},
        { name: "zeitmanagement", shape: "rect", coords: [830,90, 1105,160], preFillColor: "rgba(255, 255, 255, 0.0)", strokeColor: "#008ae6"},
        { name: "betrieb", shape: "rect", coords: [430,485, 605,555], preFillColor: "rgba(255, 255, 255, 0.0)", strokeColor: "#008ae6"}
    ]
}

export default function Organisational() { 
    const [hoveredArea, setHoveredArea] = useState()
    const [windowWidth, setWindowWidth] = useState((window.innerWidth > 1133) ? 1133 : window.innerWidth)

    const navigate = useNavigate();

    const enterArea = (area) => {
        setHoveredArea(area);
    }
    
    const leaveArea = (area) => {
        setHoveredArea(null);
    }

    // Makes sure resized images width isnt larger than images original width
    const handleResize = () => {
        setWindowWidth((window.innerWidth > 1133) ? 1133 : window.innerWidth)
    }

    // Listens to browser screen resizing
    useEffect( () => {
        window.addEventListener("resize", handleResize);
    }, [])
    // Router navigator changes page onClick
    const handleClick = () => {
        navigate(`/organisational/${hoveredArea.name}`)
    }
        
    return (
        <div>
            <Header/>
            <Box sx={{marginTop: "2%", display: "center"}} >
                <div className="image">
                <ImageMapper src={"./organisational_background.png"} map={MAP} imgWidth={1133} width={windowWidth} 
    	                onMouseEnter={area => enterArea(area)}
    	                onMouseLeave={area => leaveArea(area)}
                        onClick={handleClick}
                />
                </div>
            </Box>
            <div className="infoText"><h1><InfoOutlinedIcon sx={{color: "#008ae6"}}/> Durch Klicken auf die Symbole, erhalten Sie mehr Informationen zu den Themen!</h1></div>
    </div>
    )
}