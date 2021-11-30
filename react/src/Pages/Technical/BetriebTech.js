import * as React from 'react'
import Box from '@mui/material/Box'
import Header from "../../Components/Header.js"
import Modal from "../../Components/Modal.js"
import "./TechnicalPages.css"

const example = [
    { title: "1", picture: "../betrieb/betrieb_icon.png", contents: "Ipsum ipsum eos alias reiciendis ex."},
    { title: "2", picture: "../betrieb/betrieb_icon.png", contents: "Reiciendis provident eum laudantium non in odio non."},
    { title: "3", picture: "../betrieb/betrieb_icon.png",contents: "Placeat porro illum et totam earum voluptas."},
]

export default function BetriebTech() {
    return (
        <div className="container">
            <Header />
            <Box className="pageBox">
                <div style={{ backgroundImage: "url(../tech/betrieb_tech/betrieb.png)"}} 
                     className="backgroundImg">
                </div>
                    <div style={{ fontSize: "120%" }}>
                        <img src="../tech/betrieb_tech/betrieb_icon.png" className="icon" />
                        <div className="modalContainer">
                            {example.map((props) => 
                               <Modal {...props} key={props.title} />
                            )}   
                        </div>
                    <div style={{ marginTop: "16%" }}>
                        <img src="../tech/betrieb_tech/betrieb_footer.png" className="footerImg" />
                    </div>
                </div>
            </Box>
        </div>
    )
}