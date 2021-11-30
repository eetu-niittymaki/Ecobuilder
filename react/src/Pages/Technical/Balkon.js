import * as React from 'react'
import Box from '@mui/material/Box'
import Header from "../../Components/Header.js"
import Modal from "../../Components/Modal.js"
import "./TechnicalPages.css"

const example = [
    { title: "1", picture: "../balkon/balkon_icon.png", contents: "Ipsum ipsum eos alias reiciendis ex."},
    { title: "2", picture:"../balkon/balkon_footer.png", contents: "Reiciendis provident eum laudantium non in odio non."},
    { title: "3", picture:"../balkon/balkon_footer.png", contents: "Placeat porro illum et totam earum voluptas."},
]

export default function Balkon() {
    return (
        <div className="container">
            <Header />
            <Box className="pageBox">
                <div style={{ backgroundImage: "url(../balkon/balkon.png)"}} 
                     className="backgroundImg">
                </div>
                    <div style={{ fontSize: "120%" }}>
                        <img src="../balkon/balkon_icon.png" className="icon" />
                        <div className="modalContainer">
                            {example.map((props) => 
                               <Modal {...props} key={props.title} />
                            )}   
                        </div>
                    <div style={{ marginTop: "16%" }}>
                        <img src="../balkon/balkon_footer.png" className="footerImg" />
                    </div>
                </div>
            </Box>
        </div>
    )
}