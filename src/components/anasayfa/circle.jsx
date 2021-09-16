import React from "react";
import Dumenli from "./dumenli";
import Dumensiz from "./dumensiz";
const Circle = (props) => {
  return (
    <div>
      {(props.seenS).includes(props.kampanya.CampaignId) ? (
        <Dumensiz kampanya={props.kampanya} />
      ) : (
        <Dumenli kampanya={props.kampanya} />
      )}
    </div>
  );
};

export default Circle;
