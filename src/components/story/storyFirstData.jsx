import React from "react";
import Main from "./storyFirst";
import { useStore } from "../../contextAPI/store/Provider";
import "./story.css";
import PacmanLoader from "../loading/pacman";
const StrDataDetay2 = (props) => {
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

export default StrDataDetay2;
