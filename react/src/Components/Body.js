import React from 'react'
import "./Body.css"
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom'

export default function Body() {
    return (
        <Box sx={{ display: 'flex', 
                    justifyContent: "center"}}>
            <div className="images"
                    style={{ backgroundImage: "url(./technical_cover.png)", 
                            backgroundSize: "cover",
                            height: "70vh",
                            width: "25%",
                            marginTop: "0.5em"}}>
                <Link to="/technical" style={{ textDecoration: 'none' }}><h1>Technical Solutions</h1></Link>
            </div>
            <div className="images"
                    style={{ backgroundImage: "url(./planning_cover.jpg)", 
                            backgroundSize: "cover",
                            height: "70vh",
                            width: "25%",
                            marginTop: "0.5em"}}>
                <Link to="/planning" style={{ textDecoration: 'none' }}><h1>Planning Solutions</h1></Link>
            </div>
            <div className="images"
                    style={{ backgroundImage: "url(./organisational_cover.jpg)",
                            backgroundSize: "cover",
                            height: "70vh",
                            width: "25%",
                            marginTop: "0.5em"}}>
                <Link to="/organisation" style={{ textDecoration: 'none' }}><h1>Organisational Solutions</h1></Link>
            </div>
         </Box>
    )
}