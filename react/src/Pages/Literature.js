import React, { useEffect, useState } from "react"
import Button from '@mui/material/Button'
import ItemsCarousel from 'react-items-carousel'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import Header from '../Components/Header.js'
import ArrowCircleLeftTwoToneIcon from '@mui/icons-material/ArrowCircleLeftTwoTone';
import ArrowCircleRightTwoToneIcon from '@mui/icons-material/ArrowCircleRightTwoTone';
import "./Literature.css"

const pdfs = [
    {   id: 1, 
        title: `Optimierungsansätze für kostengünstiges und energieeffizientes Bauen (2021)`,
        author: `LfU, Ökoernergie-Institut Bayern`, 
        file: "../pdf/eshop_app000000-2.pdf"
    },
    {   id: 2, 
        title: `Modellvorhaben „KliNaWo“
                Klimagerechter Nachhaltiger Wohnbau (2017, 2019)`, 
        author: `Martin Ploss, Tobias Hatt, Christina Schneider, 
                Thomas Rosskopf, Michael BraunEnergieinstitut Vorarlberg, Dornbirn `, 
        file: "../pdf/20190729_KliNaWo_Monitoringbericht.pdf"
    },
    {   id: 3, 
        title: `Kostengünstiger und zukunftsfähiger
                Geschosswohnungsbau im Quartier (2019)`, 
        author: `Dr. Burkhard Schulze Darup (Hrsg.)`, 
        file: "../pdf/DBU-Abschlussbericht-AZ-33119_01-Hauptbericht.pdf"
    },
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
            <h1 className="litTitle">Literatur</h1>
            <div style={{ width: "60%", height: "30%", margin: "auto"}}>
                <ItemsCarousel
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={(windowWidth <= 900) ? 1 : 3 && (windowWidth <= 1300) ? 2 : 3 && (pdfs.length <= 2) ? pdfs.length : 3}
                    gutter={20}
                    leftChevron={<ArrowCircleLeftTwoToneIcon fontSize="large" style={{color: "#2F5A91"}}/>}
                    rightChevron={<ArrowCircleRightTwoToneIcon fontSize="large" style={{color: "#2F5A91"}} />}
                    chevronWidth={chevronWidth}
                    outsideChevron
                    activePosition={'center'}
                >
                    {pdfs.map((pdf) => 
                        <div style={{textAlign: "center", marginBottom: "20%", width: "auto"}}>
                            <Document
                                 file={pdf.file}
                                 options={{length: 1, disableStream: true, disableAutoFetch: true}}
                            >   <div>
                                <Page pageNumber={1}
                                      height={600}
                                      scale={0.8}
                                      width={500}
                                      style={{justifyContent: "right"}}
                                />
                                </div>
                            </Document>
                            <h4 style={{textAlign: "center"}}>{pdf.title}</h4>
                            <h5>Autoren: {pdf.author}</h5>
                            <Button variant="contained" style={{ marginLeft: "auto", marginRight: "auto", width: "auto"}}>
                                <a href={pdf.file} download style={{ color: "white", textDecoration: "none" }}>Download</a>
                            </Button>
                        </div>
                    )}
                </ItemsCarousel>
            </div>
        </div>
    )
}
