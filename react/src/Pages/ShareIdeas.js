import React from 'react'
import Button from '@mui/material/Button'
import Header from "../Components/Header.js"
import { createTheme, ThemeProvider } from '@mui/material/styles'
import "./ShareIdeas.css"

const theme = createTheme({
    palette: {
        primary: {
            main: "#2f5a91"
        }
    }
})

export default function ShareIdeas() {
    return (
        <div>
            <Header />
            <div className="ideaContainer">
                <ThemeProvider theme={theme}>
                    <div className="shareIdeaImg" style={{ backgroundImage: "url(../fragebogen.jpg)" }}>
                        <h1>
                            Teilen Sie Ihre Idee!
                        </h1>
                    </div>
                    <h2 style={{ width: "40%", marginLeft: "auto", marginRight: "auto" }}>
                        Sie haben eine Idee oder Vorschlag für kostengünstiges und energieeffizientes Bauen?
                        eilen Sie es mit uns, indem Sie den folgenden Fragebogen beantworten.
                    </h2>
                    <Button variant="contained"
                        color="primary"
                        style={{ borderRadius: "1px", color: "white" }}
                    >
                        <a href="../pdf/Fragebogen.pdf" download style={{ textDecoration: "none", color: "white" }}>Download Fragebogen</a>
                    </Button>

                    <h3>Kontakt:</h3>
                    <p>Fachliches Projektmanagement, Internet-Redaktion, Praxisbeispiele:</p>
                    <h4>Bayerisches Landesamt für Umwel</h4>
                    <p>Servicestelle Ökoenergien: Telefon: (0821) 9071-5444</p>
                    <Button variant="contained"
                        style={{ borderRadius: "1px", color: "#2f5a91" }}>
                        <a href="https://formulare.energieatlas.bayern.de/eab/kontakt.html" style={{ textDecoration: "none", color: "white", width: "200px" }}>
                            Kontaktformular
                        </a>
                    </Button>
                </ThemeProvider>
            </div>

        </div>
    )
}