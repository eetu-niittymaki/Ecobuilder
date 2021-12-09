import React, {useState } from "react"
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import IconButton from '@mui/material/IconButton';
import Slide from '@mui/material/Slide';

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
              <div>
                <h2>
                  "Wir sollten die Dämmung reduzieren und die Wärmerückgewinnung nicht in das Lüftungssystem integrieren".
                </h2>
                <p>
                  Wenn die Kosten steigen, wird die Energieeffizienz oft vernachlässigt. 
                  Aussagen, wie die obige sind daher keine Seltenheit. 
                  Energieeffizientes Bauen könne man sich nicht leisten, 
                  ist eine häufige Meinung von Gebäudemanagern, 
                  obwohl es bereits Beispiele dafür gibt, wie kostengünstige und gleichzeitig 
                  energieeffiziente Gebäude realisiert werden können.
                </p>
                <br/>
                <p>
                  Ecobuilder hat sich zum Ziel gesetzt, Sie durch die folgenden Lösungen zu inspirieren, 
                  kostengünstige Lösungen für Ihr energieeffizientes Gebäude zu finden. 
                  Wir stellen Ihnen detaillierte Informationen zu verschiedenen Optimierungsansätzen 
                  für kostengünstiges und nachhaltiges Bauen zur Verfügung. 
                  Diese werden Ihnen helfen, eine nachhaltige Energiewende zu unterstützen, 
                  ohne dabei an Energie- und Budgeteffizienz einzubüßen.
                  </p>
              </div>
            </DialogContentText >
          </DialogContent>
      </Dialog>
     </div>
    )
}