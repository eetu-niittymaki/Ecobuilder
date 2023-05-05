import React from 'react'
import "./Body.css"
import { Link } from 'react-router-dom'

export default function Body() {
    return (
        <div class="containerBody">
            <div class="rowBody">
                <div class="columnBody">
                    <div class="technicalBody" style={{backgroundImage: "url(/technical_cover.png)"}}>
                        <Link to="/technical" style={{ textDecoration: 'none' }}><h1>Technische Lösungen</h1></Link>
                    </div>
                </div>
                <div class="columnBody">
                    <div class="planningBody" style={{backgroundImage: "url(/planning_cover.jpg)"}}>
                        <Link to="/planning" style={{ textDecoration: 'none' }}><h1>Planerische Lösungen</h1></Link>
                    </div>
                </div>
                <div class="columnBody">
                    <div class="organisationalBody" style={{backgroundImage: "url(/organisational_cover.jpg)"}}>
                        <Link to="/organisational" style={{ textDecoration: 'none' }}><h1>Organisatorische Lösungen</h1></Link>
                    </div>
                </div>
            </div>
            <div className="footer">
                <Link to="/literature" style={{textDecoration: "none"}}><p>Literatur</p></Link>
                <Link to="/faq" style={{textDecoration: "none"}}><p>FAQ </p></Link>
                <Link to="/library" style={{textDecoration: "none"}}><p>Bibliothek</p></Link>
                <Link to="/idee-teilen" style={{textDecoration: "none"}}><p>Idee Teilen</p></Link>
            </div>
        </div>
    )
}