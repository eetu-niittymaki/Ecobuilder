import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Modal(props) {
  const [open, setOpen] = useState(false);
  const [numPages, setNumPages] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const loadStored = (key, defaultValue) => {
    const stored = localStorage.getItem(key);
    if (!stored) {
      return defaultValue;
    }
    return JSON.parse(stored);
  };

  const handleSaveToLibrary = (solution) => {
    const storedSolutions = loadStored("ecobuilderSavedSolutions", []);
    if (!storedSolutions.some((solution) => solution.file === props.file)) {
      storedSolutions.push(solution);
    }
    localStorage.setItem(
      "ecobuilderSavedSolutions",
      JSON.stringify(storedSolutions)
    );
  };

  return (
    <div style={{ marginBottom: "2%" }}>
      <Button variant="outlined" onClick={handleClickOpen}>
        {props.title}
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth="lg"
      >
        <DialogTitle>{props.title}</DialogTitle>
        <DialogContent>
          <Document
            file={props.file}
            onLoadSuccess={onDocumentLoadSuccess}
            options={{ length: 1, disableStream: true, disableAutoFetch: true }}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                width={window.innerWidth >= 1200 ? 1200 : window.innerWidth}
              />
            ))}
          </Document>
        </DialogContent>
      </Dialog>
      {!props.library && (
        <IconButton
          aria-label="add to library"
          size="small"
          onClick={() => handleSaveToLibrary(props)}
        >
          <AddIcon fontSize="medium" />
        </IconButton>
      )}
    </div>
  );
}
