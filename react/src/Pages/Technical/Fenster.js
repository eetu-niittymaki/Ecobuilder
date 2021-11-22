import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Header from "../../Components/Header.js"
import "./TechnicalPages.css"


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Fenster() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

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
                <div>
                    <div style={{ marginBottom: "10%", marginLeft: "10%", fontSize: "120%" }}>
                        <img src="../fenster/fenster_icon.png" style={{ marginTop: "5%" }} />
                        <div style={{ marginTop: "10%", textAlign: "center" }}>
                                <div style={{ marginBottom: "2%"}}> 
                                    <Button variant="outlined" onClick={handleClickOpen}>
                                        U-Wert-/g-Wert-Optimierung
                                    </Button>
                                    <Dialog
                                        open={open}
                                        TransitionComponent={Transition}
                                        keepMounted
                                        onClose={handleClose}
                                        aria-describedby="alert-dialog-slide-description"
                                    >
                                        <DialogTitle>{"U-Wert-/g-Wert-Optimierung"}</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText id="alert-dialog-slide-description">
                                                Ipsum ipsum eos alias reiciendis ex. 
                                                Reiciendis provident eum laudantium non in odio non. 
                                                Placeat porro illum et totam earum voluptas.
                                            </DialogContentText>
                                        </DialogContent>

                                    </Dialog>
                                </div>

                                <div style={{ marginBottom: "2%"}}>
                                    <Button variant="outlined" onClick={handleClickOpen}>
                                        Optimierung das Rahmenanteils
                                    </Button>
                                    <Dialog
                                        open={open}
                                        TransitionComponent={Transition}
                                        keepMounted
                                        onClose={handleClose}
                                        aria-describedby="alert-dialog-slide-description"
                                    >
                                        <DialogTitle>{"Optimierung das Rahmenanteils"}</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText id="alert-dialog-slide-description">
                                                Ipsum ipsum eos alias reiciendis ex. 
                                                Reiciendis provident eum laudantium non in odio non. 
                                                Placeat porro illum et totam earum voluptas.
                                            </DialogContentText>
                                        </DialogContent>
                                    </Dialog>
                                </div>

                                <div style={{ marginBottom: "2%"}}>
                                    <Button variant="outlined" onClick={handleClickOpen}>
                                        Optimierung der Fenstergröße und Ausrichtung
                                    </Button>
                                    <Dialog
                                        open={open}
                                        TransitionComponent={Transition}
                                        keepMounted
                                        onClose={handleClose}
                                        aria-describedby="alert-dialog-slide-description"
                                    >
                                        <DialogTitle>{"Optimierung der Fenstergröße und Ausrichtung"}</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText id="alert-dialog-slide-description">
                                                Ipsum ipsum eos alias reiciendis ex. 
                                                Reiciendis provident eum laudantium non in odio non. 
                                                Placeat porro illum et totam earum voluptas.
                                            </DialogContentText>
                                        </DialogContent>
                                    </Dialog>
                                </div>
                        </div>
                    </div>
                    <div style={{ marginTop: "17%" }}>
                        <img src="../fenster/fenster_footer.png" width="auto" height="auto" />
                    </div>
                </div>
            </Box>
        </div>
    )
}