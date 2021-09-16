import React from "react";
import Main from "./bagisFirst";
import { useStore } from "../../contextAPI/store/Provider";
import "./bagis.css";
import PacmanLoader from "../loading/pacman";
const BagisDetay2 = (props) => {
  // eslint-disable-next-line
  const [{ user }, dispatch] = useStore("");
  return (
    <div>
      <main role="main">
        {user ? <Main usr={user} /> : <PacmanLoader />}
      </main>
    </div>
  );
};

export default BagisDetay2;
