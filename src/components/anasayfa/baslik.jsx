import React, { useState, useEffect } from "react";
import PacmanLoader from "../loading/pacman";
import "./common.css";
const Baslik = (props) => {
  const [lastWord, setLast] = useState("");
  const [first, setFirst] = useState("");
  useEffect(() => {
    var n = props.name.split(" ");
    setLast(n[n.length - 1]);
    var sec=n.slice(0,(n.length - 1));
    setFirst((sec).join(" "));
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      {lastWord.length && first.length ? (
        <p className="name3">
          {first} <br /> {lastWord}
        </p>
      ) : (
        <PacmanLoader />
      )}
    </div>
  );
};

export default Baslik;
