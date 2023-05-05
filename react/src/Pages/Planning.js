import React, { useState, useEffect } from 'react'
import Header from '../Components/Header.js'
import Box from '@mui/material/Box';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useNavigate } from "react-router-dom";
import ImageMapper from 'react-image-mapper';
import "./Planning.css"

const MAP = {
        name: 'planning',
        areas: [
            { name: "grundriss", shape: "rect", coords: [110,35, 330,110], preFillColor: "rgba(255, 255, 255, 0.0)", strokeColor: "#008ae6"},
            { name: "gesamtsystem", shape: "rect", coords: [385,25, 660,100], preFillColor: "rgba(255, 255, 255, 0.0)", strokeColor: "#008ae6"},
            { name: "brandschutz", shape: "rect", coords: [740,35, 1000,110], preFillColor: "rgba(255, 255, 255, 0.0)", strokeColor: "#008ae6"},
            { name: "heizung", shape: "rect", coords: [240,660, 420,730], preFillColor: "rgba(255, 255, 255, 0.0)", strokeColor: "#008ae6"},
            { name: "kuhlung", shape: "rect", coords: [540,660, 810,750], preFillColor: "rgba(255, 255, 255, 0.0)", strokeColor: "#008ae6"},
            { name: "luftung", shape: "rect", coords: [810,600, 990,675], preFillColor: "rgba(255, 255, 255, 0.0)", strokeColor: "#008ae6"},
            { name: "betrieb", shape: "rect", coords: [20,610, 220,690], preFillColor: "rgba(255, 255, 255, 0.0)", strokeColor: "#008ae6"}
        ]
    }
    
export default function Planning() { 
    const [hoveredArea, setHoveredArea] = useState()
    const [windowWidth, setWindowWidth] = useState((window.innerWidth > 1046) ? 1046 : window.innerWidth)
    
    const navigate = useNavigate();
    
    const enterArea = (area) => {
        setHoveredArea(area);
    }
        
    const leaveArea = (area) => {
        setHoveredArea(null);
    }
    
    // Makes sure resized images width isnt larger than images original width
    const handleResize = (e) => {
        setWindowWidth((window.innerWidth > 1046) ? 1046 : window.innerWidth)
    }
    
    // Listens to browser screen resizing
    useEffect( () => {
        window.addEventListener("resize", handleResize);
    }, [])
    // Router navigator changes page onClick
    const handleClick = () => {
        navigate(`/planning/${hoveredArea.name}`)
    }
            
    return (
        <div>
            <Header/>
            <Box sx={{marginTop: "1%", display: "center"}} >
                <div className="image">
                <ImageMapper src={"./planning_background.png"} map={MAP} imgWidth={1046} width={windowWidth} 
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