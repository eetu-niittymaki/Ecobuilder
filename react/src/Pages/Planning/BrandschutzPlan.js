import * as React from 'react'
import Box from '@mui/material/Box'
import Header from "../../Components/Header.js"
import Modal from "../../Components/Modal.js"
import "./PlanningPages.css"

const example = [
    { title: "1", picture: "../fenster/fenster_icon.png", contents: "Ipsum ipsum eos alias reiciendis ex."},
    { title: "2", picture:"../fenster/fenster_footer.png", contents: "Reiciendis provident eum laudantium non in odio non."},
    { title: "3", picture:"../fenster/fenster_footer.png",contents: "Placeat porro illum et totam earum voluptas."},
]

export default function BrandschutzPlan() {
    return (
        <div className="container">
            <Header />
            <Box className="pageBox">
                <div style={{ backgroundImage: "url(../plan/brandschutz_plan/brandschutz.png)"}} 
                     className="backgroundImg">
                </div>
                    <div style={{ fontSize: "120%" }}>
                        <img src="../plan/brandschutz_plan/brandschutz_icon.png" className="icon" />
                        <div className="modalContainer">
                            {example.map((props) => 
                               <Modal {...props} key={props.title} />
                            )}   
                        </div>
                    <div style={{ marginTop: "16%" }}>
                        <img src="../plan/brandschutz_plan/brandschutz_footer.png" className="footerImg" />
                    </div>
                </div>
            </Box>
        </div>
    )
}