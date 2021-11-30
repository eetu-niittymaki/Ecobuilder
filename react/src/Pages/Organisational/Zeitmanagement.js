import * as React from "react";
import Box from "@mui/material/Box";
import Header from "../../Components/Header.js";
import Button from "@mui/material/Button";
import "./OrganisationalPages.css";

const onClick = () => {
  alert("Nothing here yet :(");
};

export default function Zeitmanagement() {
  return (
    <div className="container">
      <Header />
      <Box className="pageBox">
        <div
          style={{
            backgroundImage: "url(../orga/zeitmanagement/zeitmanagement.png)",
          }}
          className="backgroundImg"
        ></div>
        <div>
          <img
            src="../orga/zeitmanagement/zeitmanagement_icon.png"
            className="icon"
            alt=""
          />
          <div>
            <h1>Your ideas could stand right here!</h1>
          </div>
          <Button
            variant="outlined"
            onClick={onClick}
            style={{
              position: "relative",
              width: "30%",
              height: "10%",
              left: "35%",
              marginBottom: "5%",
            }}
          >
            share ideas
          </Button>
          <div>
            <img
              src="../orga/zeitmanagement/zeitmanagement_footer.png"
              className="footerImg"
              alt=""
            />
          </div>
        </div>
      </Box>
    </div>
  );
}
