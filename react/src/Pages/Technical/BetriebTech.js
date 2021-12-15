import * as React from "react";
import Box from "@mui/material/Box";
import Header from "../../Components/Header.js";
import Modal from "../../Components/Modal.js";
import "./TechnicalPages.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const solutions = [
  {
    file: "../solutions/Tech-Betrieb_Bedarfsgerechte Anforderung von Warmwasser.pdf",
  },
];

export default function BetriebTech() {
  return (
    <div className="container">
      <Header />
      <Box className="pageBox">
        <div
          style={{ backgroundImage: "url(../tech/betrieb_tech/betrieb.png)" }}
          className="backgroundImg"
        ></div>
        <div style={{ fontSize: "120%" }}>
          <img
            src="../tech/betrieb_tech/betrieb_icon.png"
            className="icon"
            alt=""
          />
          <div className="modalContainer">
            {solutions.length > 0 ? (
              solutions.map((props) => (
                <Modal
                  {...props}
                  key={props.file}
                  title={props.file
                    .split("/", 4)[2]
                    .split("_", 2)[1]
                    .split(".", 1)
                    .toString()}
                />
              ))
            ) : (
              <div>
                <h1>Ihre Ideen könnten genau hier stehen!</h1>
                <Link to="/idee-teilen" style={{ textDecoration: "none" }}>
                  <Button variant="outlined" sx={{ width: "30%" }}>
                    Idee Teilen
                  </Button>
                </Link>
              </div>
            )}
          </div>
          <div style={{ marginTop: "16%" }}>
            <img
              src="../tech/betrieb_tech/betrieb_footer.png"
              className="footerImg"
              alt=""
            />
          </div>
        </div>
      </Box>
    </div>
  );
}
