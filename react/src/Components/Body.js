import React from 'react'
import "./Body.css"
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom'

export default function Body() {
    return (
        <div class="containerBody">
            <div class="rowBody">
                <div class="columnBody">
                    <div class="technicalBody" style={{backgroundImage: "url(/technical_cover.png)"}}>
                        <Link to="/technical" style={{ textDecoration: 'none' }}><h1>Technical Solutions</h1></Link>
                    </div>
                </div>
                <div class="columnBody">
                    <div class="planningBody" style={{backgroundImage: "url(/planning_cover.jpg)"}}>
                        <Link to="/planning" style={{ textDecoration: 'none' }}><h1>Planning Solutions</h1></Link>
                    </div>
                </div>
                <div class="columnBody">
                    <div class="organisationalBody" style={{backgroundImage: "url(/organisational_cover.jpg)"}}>
                        <Link to="/organisational" style={{ textDecoration: 'none' }}><h1>Organisational Solutions</h1></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}