import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Header from "../Components/Header.js";
import Modal from "../Components/Modal.js";
import "./Library.css";
import { Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DownloadIcon from "@mui/icons-material/Download";

export default function Library() {
  const [savedSolutions, setSavedSolutions] = useState([]);

  // key = variable name in session storage, default = use this, if key not found
  const loadStored = (key, defaultValue) => {
    const stored = localStorage.getItem(key);
    if (!stored) {
      return defaultValue;
    }
    return JSON.parse(stored);
  };

  const handleDelete = (storedSolution) => {
    const storedJSON = JSON.parse(
      localStorage.getItem("ecobuilderSavedSolutions")
    );
    for (let i = 0; i < storedJSON.length; i++) {
      if (storedJSON[i].file === storedSolution.file) {
        storedJSON.splice(i, 1);
        localStorage.setItem(
          "ecobuilderSavedSolutions",
          JSON.stringify(storedJSON)
        );
        setSavedSolutions(loadStored("ecobuilderSavedSolutions", []));
      }
    }
  };

  const handleDownload = (storedSolution) => {
    const link = document.createElement("a");
    link.download = storedSolution.file;
    link.href = storedSolution.file;
    link.click();
  };

  //Fetch from local storage.
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
                <div className="libraryContainer">
                  <Modal
                    {...savedSolution}
                    key={savedSolution.file}
                    library="true"
                  />
                  <IconButton
                    aria-label="download file"
                    size="small"
                    onClick={() => handleDownload(savedSolution)}
                    sx={{ marginBottom: "1%" }}
                  >
                    <DownloadIcon size="medium" />
                  </IconButton>
                  <IconButton
                    aria-label="delete from library"
                    size="small"
                    onClick={() => handleDelete(savedSolution)}
                    sx={{ marginBottom: "2%" }}
                  >
                    <DeleteIcon fontSize="medium" />
                  </IconButton>
                </div>
              ))}
            </div>
          </div>
        )}
      </Box>
    </div>
  );
}
