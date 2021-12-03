import * as React from "react";
import Box from "@mui/material/Box";
import Header from "../../Components/Header.js";
import Modal from "../../Components/Modal.js";
import "./OrganisationalPages.css";

const example = [
  {
    title: "Definition und Sicherung der Qualitätsanforderungen",
    picture1: "../orga/ausschreibung/ausschreibung_icon.png",
    picture2: "../orga/ausschreibung/ausschreibung_footer.png",
    contents: "Ipsum ipsum eos alias reiciendis ex.",
  },
];

export default function Ausschreibung() {
  return (
    <div className="container">
      <Header />
      <Box className="pageBox">
        <div
          style={{
            backgroundImage: "url(../orga/ausschreibung/ausschreibung.png)",
          }}
          className="backgroundImg"
        ></div>
        <div style={{ fontSize: "120%" }}>
          <img
            src="../orga/ausschreibung/ausschreibung_icon.png"
            className="icon"
            alt="Ausschreibung"
          />
          <div className="modalContainer">
            {example.map((props) => (
              <Modal {...props} key={props.title} />
            ))}
          </div>
          <div style={{ marginTop: "16%" }}>
            <img
              src="../orga/ausschreibung/ausschreibung_footer.png"
              className="footerImg"
              alt="Ausschreibung"
            />
          </div>
        </div>
      </Box>
    </div>
  );
}
