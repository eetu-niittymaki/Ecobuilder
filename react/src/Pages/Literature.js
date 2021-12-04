import React, { useEffect, useState } from "react"
import Button from '@mui/material/Button'
import ItemsCarousel from 'react-items-carousel'
import Header from '../Components/Header.js'
import ArrowCircleLeftTwoToneIcon from '@mui/icons-material/ArrowCircleLeftTwoTone';
import ArrowCircleRightTwoToneIcon from '@mui/icons-material/ArrowCircleRightTwoTone';
import "./Literature.css"

const pdfs = [
    {id: 1, title: "Energy", cover: "../pdf/Energy.png", author: "Jack", file: "../pdf/eshop_app000000-2.pdf"},
    {id: 2, title: "More energy", cover: "../pdf/Energy.png", author: "Bruce", file: "../pdf/eshop_app000000-2.pdf"},
    {id: 3, title: "Less energy", cover: "../pdf/Energy.png", author: "Dave", file: "../pdf/eshop_app000000-2.pdf"},
    {id: 4, title: "Yes", cover: "../pdf/Energy.png", author: "some guy", file: "../pdf/eshop_app000000-2.pdf"},
]

export default function Literature() {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const chevronWidth = 10;

    const handleResize = (e) => {
        setWindowWidth(window.innerWidth)
    }
    useEffect( () => {
        window.addEventListener("resize", handleResize);
    }, [])

    return (
        <div>
            <Header />
            <h1 className="litTitle">Literature</h1>
            <div style={{ padding: `0 ${chevronWidth}px`, width: "60%", height: "30%", margin: "auto"}}>
                <ItemsCarousel
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={(windowWidth <= 800) ? 1 : 3}
                    gutter={20}
                    leftChevron={<ArrowCircleLeftTwoToneIcon fontSize="large" style={{color: "#2F5A91"}}/>}
                    rightChevron={<ArrowCircleRightTwoToneIcon fontSize="large" style={{color: "#2F5A91"}} />}
                    chevronWidth={chevronWidth}
                >
                    {pdfs.map((pdf) => 
                    <div style={{textAlign: "center", marginBottom: "20%"}}>
                        <img src={pdf.cover} height="600vh" /> 
                        <h3 style={{textAlign: "center"}}>{pdf.title}</h3>
                        <h4>Autoren: {pdf.author}</h4>
                        <Button variant="contained" style={{ marginLeft: "auto", marginRight: "auto", width: "60%"}}>
                            <a href={pdf.file} download style={{ color: "white", textDecoration: "none" }}>Download</a>
                        </Button>
                    </div>
                    )}
                </ItemsCarousel>
            </div>
        </div>
    )
}

/*
                            <img src={pdf.cover}/> 
                            <h3 style={{textAlign: "center"}}>{pdf.title}</h3>
                            <h4>Autoren: {pdf.author}</h4>
                            <Button variant="contained" style={{marginLeft: "auto", marginRight: "auto"}}><a href={pdf.file} download>Download</a></Button>
*/