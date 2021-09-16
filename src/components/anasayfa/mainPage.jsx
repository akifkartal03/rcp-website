import React from "react";
import Main from "./header";
import { useStore } from "../../contextAPI/store/Provider";
import "./common.css";
import PacmanLoader from "../loading/pacman";
const MainPage = (props) => {
  // eslint-disable-next-line
  const [{ user }, dispatch] = useStore("");
  return (
    <div>
      <main role="main">
        {user ? <Main str={user.stories} def={user.defs} seen={user.seenStories} dona={user.donates}/> : <PacmanLoader />}
      </main>
    </div>
  );
};

export default MainPage;
