import React, { useState, useEffect } from 'react'
import Header from '../Components/Header.js'
import Box from '@mui/material/Box';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useNavigate } from "react-router-dom";
import ImageMapper from 'react-image-mapper';
import "./Technical.css"

const MAP = {
        name: 'technical',
        areas: [
            { name: "fenster", shape: "rect", coords: [905,140, 1125,230], preFillColor: "rgba(255, 255, 255, 0.0)", strokeColor: "#008ae6"},
            { name: "wand", shape: "rect", coords: [1020,585, 1215,680], preFillColor: "rgba(255, 255, 255, 0.0)", strokeColor: "#008ae6"},
            { name: "betrieb", shape: "rect", coords: [685,85, 900,165], preFillColor: "rgba(255, 255, 255, 0.0)", strokeColor: "#008ae6"},
            { name: "dach", shape: "rect", coords: [510,10, 705,85], preFillColor: "rgba(255, 255, 255, 0.0)", strokeColor: "#008ae6"},
            { name: "balkon", shape: "rect", coords: [115,45, 335,135], preFillColor: "rgba(255, 255, 255, 0.0)", strokeColor: "#008ae6"},
            { name: "fundament", shape: "rect", coords: [520,605, 805,695], preFillColor: "rgba(255, 255, 255, 0.0)", strokeColor: "#008ae6"},
            { name: "brandschutz", shape: "rect", coords: [75,590, 400,690], preFillColor: "rgba(255, 255, 255, 0.0)", strokeColor: "#008ae6"}
        ]
    }
    
export default function Technical() { 
    const [hoveredArea, setHoveredArea] = useState()
    const [windowWidth, setWindowWidth] = useState((window.innerWidth > 1227) ? 1227 : window.innerWidth)
    
    const navigate = useNavigate();
    
    const enterArea = (area) => {
        setHoveredArea(area);
    }
        
    const leaveArea = (area) => {
        setHoveredArea(null);
    }
    
    // Makes sure resized images width isnt larger than images original width
    const handleResize = () => {
        setWindowWidth((window.innerWidth > 1227) ? 1227 : window.innerWidth)
    }
    
    // Listens to browser screen resizing
    useEffect( () => {
        window.addEventListener("resize", handleResize);
    }, [])
    // Router navigator changes page onClick
    const handleClick = () => {
        navigate(`/technical/${hoveredArea.name}`)
    }
            
    return (
        <div>
            <Header/>
            <Box sx={{marginTop: "1%", display: "center"}} >
                <div className="image">
                <ImageMapper src={"./technical_background.png"} map={MAP} imgWidth={1227} width={windowWidth} 
                            onMouseEnter={area => enterArea(area)}
                            onMouseLeave={area => leaveArea(area)}
                        onClick={handleClick}
                />
                </div>
            </Box>
            <div className="infoText"><h1><InfoOutlinedIcon sx={{color: "#008ae6"}}/> Click on the icons to get more information on the topics you are interested in!</h1></div>
    </div>
    )
}