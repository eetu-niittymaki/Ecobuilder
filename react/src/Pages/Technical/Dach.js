import * as React from 'react'
import Box from '@mui/material/Box'
import Header from "../../Components/Header.js"
import Modal from "../../Components/Modal.js"
import "./TechnicalPages.css"

const example = [
    { title: "U-Wert-/g-Wert-Optimierung", picture: "../fenster/fenster_icon.png", contents: "Ipsum ipsum eos alias reiciendis ex."},
    { title: "Optimierung das Rahmenanteils", picture:"../fenster/fenster_footer.png", contents: "Reiciendis provident eum laudantium non in odio non."},
    { title: "Optimierung der Fenstergröße und Ausrichtung", picture:"../fenster/fenster_footer.png",contents: "Placeat porro illum et totam earum voluptas."},
]

export default function Dach() {
    return (
        <div className="container">
            <Header />
            <Box className="pageBox">
                <div style={{ backgroundImage: "url(../dach/dach.png)"}} 
                     className="backgroundImg">
                </div>
                    <div style={{ fontSize: "120%" }}>
                        <img src="../dach/dach_icon.png" className="icon" />
                        <div className="modalContainer">
                            {example.map((props) => 
                               <Modal {...props} key={props.title} />
                            )}   
                        </div>
                    <div style={{ marginTop: "16%" }}>
                        <img src="../dach/dach_footer.png" className="footerImg" />
                    </div>
                </div>
            </Box>
        </div>
    )
}