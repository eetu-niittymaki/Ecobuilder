import * as React from "react";
import Box from "@mui/material/Box";
import Header from "../../Components/Header.js";
import Modal from "../../Components/Modal.js";
import "./OrganisationalPages.css";

const example = [
  {
    title: "Integrale Planung",
    picture1: "../orga/qualitätsmanagement/qualitätsmanagement_icon.png",
    picture2: "../orga/qualitätsmanagement/qualitätsmanagement_footer.png",
    contents: "Ipsum ipsum eos alias reiciendis ex.",
  },
  {
    title: "Raumweise Einregulierung der Lüftung",
    picture1: "../orga/qualitätsmanagement/qualitätsmanagement_icon.png",
    picture2: "../orga/qualitätsmanagement/qualitätsmanagement_footer.png",
    contents: "Ipsum ipsum eos alias reiciendis ex.",
  },
  {
    title: "Qualitätssicherung bei der Ausführung",
    picture1: "../orga/qualitätsmanagement/qualitätsmanagement_icon.png",
    picture2: "../orga/qualitätsmanagement/qualitätsmanagement_footer.png",
    contents: "Ipsum ipsum eos alias reiciendis ex.",
  },
];

export default function Qualitätsmanagement() {
  return (
    <div className="container">
      <Header />
      <Box className="pageBox">
        <div
          style={{
            backgroundImage:
              "url(../orga/qualitätsmanagement/qualitätsmanagement.png)",
          }}
          className="backgroundImg"
        ></div>
        <div style={{ fontSize: "120%" }}>
          <img
            src="../orga/qualitätsmanagement/qualitätsmanagement_icon.png"
            className="icon"
            alt="Qualitätsmanagement"
          />
          <div className="modalContainer">
            {example.map((props) => (
              <Modal {...props} key={props.title} />
            ))}
          </div>
          <div style={{ marginTop: "16%" }}>
            <img
              src="../orga/qualitätsmanagement/qualitätsmanagement_footer.png"
              className="footerImg"
              alt="Qualitätsmanagement"
            />
          </div>
        </div>
      </Box>
    </div>
  );
}
