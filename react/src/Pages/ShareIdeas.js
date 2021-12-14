import React from 'react'
import Button from '@mui/material/Button'
import Header from "../Components/Header.js"

export default function ShareIdeas() {
    return (
        <div>
            <Header />
            <div style={{textAlign: "center", 
                         marginLeft: "auto", marginRight: "auto", 
                         marginTop: "10%", 
                         fontFamily: "Lato"}}>
                <h1>Teilen Sie Ihre Idee!</h1>
                <h3 style={{width: "40%", marginLeft: "auto", marginRight: "auto"}}>Sie haben eine Idee oder Vorschlag für kostengünstiges und energieeffizientes Bauen? 
                    eilen Sie es mit uns, indem Sie den folgenden Fragebogen beantworten.</h3>
                <Button variant="outlined" style={{ marginLeft: "auto", marginRight: "auto", width: "auto"}}>
                    <a href="../pdf/Fragebogen.pdf" download style={{textDecoration: "none", color: "#2F5A91" }}>Download PDF</a>
                </Button>

                <h4>Kontakt:</h4>
                <p>Fachliches Projektmanagement, Internet-Redaktion, Praxisbeispiele:</p>
                <p style={{fontWeight: "bold"}}>Bayerisches Landesamt für Umwel</p>
                <p>Servicestelle Ökoenergien: Telefon: (0821) 9071-5444</p>
                <h1>
                    <a href="https://formulare.energieatlas.bayern.de/eab/kontakt.html" style={{textDecoration: "none", color: "#2F5A91", width: "200px"}}>
                        LINK
                    </a>
                </h1>
            </div>
        </div>
    )
}