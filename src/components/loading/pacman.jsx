import React from "react";
import { css } from "@emotion/react";
import PacmanLoader from "react-spinners/PacmanLoader";
import "./load.css";

const Pacman = () => {
  const override = css`
    display: block;
    margin: 150px;
    alignitems: "center";
  `;
  return (
    <div>
      <p style={{marginTop:"20px",marginLeft:"10px"}}><strong>Loading...</strong></p>
      <br/>
      <p style={{marginTop:"10px",marginLeft:"120px"}}><strong>Remastered Campaign Pages</strong></p>
      <PacmanLoader color={"#2146ff"} loading={true} css={override} size={30} />
    </div>
  );
};

export default Pacman;
