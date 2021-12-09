import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Header from "../Components/Header.js";
import Modal from "../Components/Modal.js";
import "./Library.css";
import { Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const storedSolutions = [
  {
    title: "Ipsum ipsum eos alias reiciendis ex. 1",
    contents: "Ipsum ipsum eos alias reiciendis ex.",
  },
  {
    title: "Ipsum ipsum eos alias reiciendis ex. 2",
    contents: "Ipsum ipsum eos alias reiciendis ex.",
  },
  {
    title: "Ipsum ipsum eos alias reiciendis ex. 3",
    contents: "Ipsum ipsum eos alias reiciendis ex.",
  },
];

export default function Library() {
  const [savedSolutions, setSavedSolutions] = useState([]);

  // key = variable name in session storage, default = use this, if key not found
  const loadStored = (key, defaultValue) => {
    const stored = sessionStorage.getItem(key);
    if (!stored) {
      return defaultValue;
    }
    return JSON.parse(stored);
  };

  const handleDelete = (storedSolution) => {
    const storedJSON = JSON.parse(
      sessionStorage.getItem("ecobuilderSavedSolutions")
    );
    for (let i = 0; i < storedJSON.length; i++) {
      if (storedJSON[i].title === storedSolution.title) {
        storedJSON.splice(i, 1);
        sessionStorage.setItem(
          "ecobuilderSavedSolutions",
          JSON.stringify(storedJSON)
        );
        setSavedSolutions(loadStored("ecobuilderSavedSolutions", []));
      }
    }
  };

  //Save an array to session storage.
  useEffect(() => {
    // When adding another solution:
    // const storedSolutions = loadStored("ecobuilderSavedSolutions", []);
    // storedSolutions.push(this.title); // this = the solution you want to add
    sessionStorage.setItem(
      "ecobuilderSavedSolutions",
      JSON.stringify(storedSolutions)
    );
  }, []);

  //Fetch from session storage.
  useEffect(() => {
    setSavedSolutions(loadStored("ecobuilderSavedSolutions", []));
  }, []);

  return (
    <div className="container">
      <Header />
      <div
        className="libraryHeader"
        style={{
          backgroundImage: "url(../library/library.png)",
        }}
      >
        <h2>Bibliothek</h2>
      </div>
      <Box className="pageBox">
        {savedSolutions.length === 0 ? (
          <h1>You haven't saved anything yet!</h1>
        ) : (
          <div style={{ fontSize: "120%" }}>
            <div className="modalContainer">
              {savedSolutions.map((savedSolution) => (
                <div className="libraryContainer" key={savedSolution.title}>
                  <Modal {...savedSolution} />
                  <IconButton
                    aria-label="delete"
                    size="small"
                    onClick={() => handleDelete(savedSolution)}
                  >
                    <DeleteIcon fontSize="medium" />
                  </IconButton>
                </div>
              ))}
            </div>
            <div className="modalContainer">
              <Button variant="contained">Export all?</Button>
            </div>
          </div>
        )}
      </Box>
    </div>
  );
}
