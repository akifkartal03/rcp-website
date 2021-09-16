import React from "react";
import { Redirect } from 'react-router';
import "./story.css";

const StrDetay3 = (props) => {
    const id =
    window.location.pathname.split("/")[
      window.location.pathname.split("/").length - 1
    ];
  return (
    <div>
     <Redirect to={`/story/${id}`}/>
    </div>
  );
};

export default StrDetay3;
