import React from 'react'
import "./Body.css"
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom'

export default function Body() {
    return (
        <Box sx={{ display: 'flex', 
                    justifyContent: "center"}}>
            <div className="images"
                    style={{ backgroundImage: "url(https://www.dealcloud.com/wp-content/uploads/2020/01/Blueprint-graphic.png)", 
                            backgroundSize: "cover",
                            height: "70vh",
                            width: "25%",
                            marginTop: "0.5em"}}>
                <Link to="/technical"><h1>Technical Solutions</h1></Link>
            </div>
            <div className="images"
                    style={{ backgroundImage: "url(http://buildwithvisionary.com/wp-content/uploads/2016/05/Hampton-floorplans-04.jpg)", 
                            backgroundSize: "cover",
                            height: "70vh",
                            width: "25%",
                            marginTop: "0.5em"}}>
                <Link to="/planning"><h1>Planning Solutions</h1></Link>
            </div>
            <div className="images"
                    style={{ backgroundImage: "url(https://miro.medium.com/max/980/1*b1IsY6YX7Wb-ngq6otMPKw.jpeg)",
                            backgroundSize: "cover",
                            height: "70vh",
                            width: "25%",
                            marginTop: "0.5em"}}>
                <Link to="/organisation"><h1>Organisational Solutions</h1></Link>
            </div>
         </Box>
    )
}