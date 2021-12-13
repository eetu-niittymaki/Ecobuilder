import * as React from 'react'
import Box from '@mui/material/Box'
import Header from "../../Components/Header.js"
import Modal from "../../Components/Modal.js"
import "./TechnicalPages.css"

const solutions = [
    { title: "U-Wert-/g-Wert-Optimierung", file: "../solutions/fenster_U Wert g-Wert_Optimierung.pdf"},
    { title: "Optimierung das Rahmenanteils", file: "../solutions/fenster_Optimierung des Rahmenanteils.pdf"},
    { title: "Optimierung der Fenstergröße und Ausrichtung", file: "../solutions/fenster_Optimierung der Fenstergröße und Ausrichtung.pdf"},
]

export default function Fenster() {
    return (
        <div className="container">
            <Header />
            <Box className="pageBox">
                <div style={{ backgroundImage: "url(../tech/fenster/fenster.png)"}} 
                     className="backgroundImg">
                </div>
                    <div style={{ fontSize: "120%" }}>
                        <img src="../tech/fenster/fenster_icon.png" className="icon" />
                        <div className="modalContainer">
                            {solutions.map((props) => 
                               <Modal {...props} key={props.title} />
                            )}   
                        </div>
                    <div style={{ marginTop: "16%" }}>
                        <img src="../tech/fenster/fenster_footer.png" className="footerImg" />
                    </div>
                </div>
            </Box>
        </div>
    )
}