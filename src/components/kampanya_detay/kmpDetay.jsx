import React from "react";
import Main from "./detay";
import { useStore } from "../../contextAPI/store/Provider";
import "./page.css";
import PacmanLoader from "../loading/pacman";
const KmpDetay2 = (props) => {
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

export default KmpDetay2;
