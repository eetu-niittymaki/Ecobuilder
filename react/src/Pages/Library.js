import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Header from "../Components/Header.js";
import Modal from "../Components/Modal.js";
import "./Library.css";
import { Button } from "@mui/material";

const example = [
  {
    title: "Definition und Sicherung der Qualitätsanforderungen",
    contents: "Ipsum ipsum eos alias reiciendis ex.",
  },
  {
    title: "Definition und Sicherung der Qualitätsanforderungen A",
    contents: "Ipsum ipsum eos alias reiciendis ex.",
  },
  {
    title: "Definition und Sicherung der Qualitätsanforderungen B",
    contents: "Ipsum ipsum eos alias reiciendis ex.",
  },
];

const example2 = [
  {
    title: "Definition und Sicherung der Qualitätsanforderungen",
    contents: "Ipsum ipsum eos alias reiciendis ex.",
  },
];

export default function Library() {
  const [savedSolutions, setSavedSolutions] = useState([]);

  // key = avain session storagessa, default = avainta ei löydy
  const loadStored = (key, defaultValue) => {
    const stored = sessionStorage.getItem(key);
    if (!stored) {
      return defaultValue;
    }
    return JSON.parse(stored);
  };

  //Save an array to session storage.
  useEffect(() => {
    sessionStorage.setItem("solutions", JSON.stringify(example));
  }, []);

  //Fetch from session storage.
  useEffect(() => {
    setSavedSolutions(loadStored("solutions", example2));
    console.log(JSON.stringify(savedSolutions));
  }, []);

  return (
    <div className="container">
      <Header />
      <Box className="pageBox">
        <div
          style={{
            backgroundImage: "url(../library/library.png)",
          }}
          className="backgroundImg"
        ></div>
        <div style={{ fontSize: "120%" }}>
          <div className="modalContainer">
            {savedSolutions.map((savedSolutions) => (
              <Modal {...savedSolutions} key={savedSolutions.title} />
            ))}
          </div>
          <div className="modalContainer">
            <Button variant="contained">Download?</Button>
          </div>
          <div style={{ marginTop: "16%" }}>
            <img
              src="../organisational_cover.jpg"
              className="footerImg"
              alt="library"
            />
          </div>
        </div>
      </Box>
    </div>
  );
}
