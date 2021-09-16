import React from "react";
import Main from "./story";
import { useStore } from "../../contextAPI/store/Provider";
import "./story.css";
import PacmanLoader from "../loading/pacman";
const StrDetay2 = (props) => {
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

export default StrDetay2;
