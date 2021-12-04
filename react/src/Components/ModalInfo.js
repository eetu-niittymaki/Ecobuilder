import React, {useState } from "react"
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import IconButton from '@mui/material/IconButton';
import Slide from '@mui/material/Slide';

// TODO: ADD INFO TEXT
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function InfoModal() {
    // Reused code from Modal.js, very stupid bad, not good
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

    return (
    <div>
       <IconButton >
          <InfoOutlinedIcon sx={{color: "#008ae6"}} onClick={handleClickOpen}/>
        </IconButton>
        <Dialog
        open={open}
        transitionComponent={Transition}
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth="lg"
      >
        <DialogTitle>{"Info"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              {"Lorem ipsum dolor dei etc..."}
            </DialogContentText >
          </DialogContent>
      </Dialog>
     </div>
    )
}