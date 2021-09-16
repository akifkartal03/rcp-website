import React from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/BeatLoader";
import "./load.css";

const Pacman = () => {
  const override = css`
    display: block;
    margin: 150px;
    alignitems: "center";
  `;
  return (
    <div>
      <ClipLoader color={"#2146ff"} loading={true} css={override} size={30} />
    </div>
  );
};

export default Pacman;
