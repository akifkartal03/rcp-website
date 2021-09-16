import React, { useState, useEffect } from "react";
import StoryPage from "./storyPage";
import "./story.css";
import { getDataProperty } from "../../services/kampanya_service";
import PacmanLoader from "../loading/pacman";

const StoryApp = (props) => {
  const [kampanya, setKampanya] = useState([]);
  const [inde, setIndex] = useState("");
  const [intId, setid] = useState(null);
  const id =
    window.location.pathname.split("/")[
      window.location.pathname.split("/").length - 1
    ];
  useEffect(() => {
    // eslint-disable-next-line
    props.usr.stories.map((value,index) => {
      // eslint-disable-next-line
      if (value.CampaignId == id) {
        setKampanya(getDataProperty(value, "MediaUrl")[0]);
        setIndex(index);
        setid(value.CampaignId);
      }
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {kampanya.length && inde !== "" && intId !== null? <StoryPage arr={kampanya} cmpId={id} ind={inde} usr={props.usr} id2={intId}/> : <PacmanLoader />}
    </div>
  );
};
export default StoryApp;
