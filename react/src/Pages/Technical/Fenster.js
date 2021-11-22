import * as React from 'react'
import Box from '@mui/material/Box'
import Slide from '@mui/material/Slide';
import Header from "../../Components/Header.js"
import Modal from "../../Components/Modal.js"
import "./TechnicalPages.css"

const example = [
    { title: "U-Wert-/g-Wert-Optimierung", contents: "Ipsum ipsum eos alias reiciendis ex."},
    { title: "Optimierung das Rahmenanteils", contents: "Reiciendis provident eum laudantium non in odio non."},
    { title: "Optimierung der Fenstergröße und Ausrichtung", contents: "Placeat porro illum et totam earum voluptas."},
]

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Fenster() {
    return (
        <div className="container">
            <Header />
            <Box sx={{
                marginTop: "1%", display: 'inline-flex',
                justifyContent: "center", width: "100%"
            }}>
                <div style={{
                    backgroundImage: "url(../fenster/fenster_window.png)",
                    backgroundSize: "cover",
                    height: "90vh",
                    width: "20%",
                }}>
                </div>
                    <div style={{ marginLeft: "10%", fontSize: "120%" }}>
                        <img src="../fenster/fenster_icon.png" style={{ marginTop: "5%" }} />
                        <div style={{ marginTop: "10%", textAlign: "center" }}>
                            {example.map((props) => 
                               <Modal {...props} key={props.title} />
                            )}   
                        </div>
                    <div style={{ marginTop: "17%" }}>
                        <img src="../fenster/fenster_footer.png" width="auto" height="auto" />
                    </div>
                </div>
            </Box>
        </div>
    )
}