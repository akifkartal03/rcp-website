import React from "react";
import BagisPage from "./bagisListe";
import { useStore } from "../../contextAPI/store/Provider";
import PacmanLoader from "../loading/pacman";
const BagisData = () => {
  // eslint-disable-next-line
  const [{ user }, dispatch] = useStore("");
  return (
    <div>
      <main role="main">
        {user ? <BagisPage arr={user.donates} /> : <PacmanLoader />}
      </main>
    </div>
  );
};

export default BagisData;
