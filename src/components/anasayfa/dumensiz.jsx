import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import ReactRoundedImage from "react-rounded-image";
import { Button } from "reactstrap";
import { getDataProperty } from "../../services/kampanya_service";
import Baslik from "./baslik";
const Dumensiz = (props) => {
  return (
    <div>
      <Button
        data-testid="btn"
        color="link"
        tag={RouterNavLink}
        to={`/story/${props.kampanya.CampaignId}`}
      >
        <ReactRoundedImage
          image={getDataProperty(props.kampanya,"ImageUrl")[0]}
          roundedColor="#205296"
          imageWidth="73"
          imageHeight="72"
          roundedSize="2"
          hoverColor="#205296"
        />
      </Button>
      {getDataProperty(props.kampanya, "Title")[0].length > 15 ? (
        <Baslik
          name={getDataProperty(props.kampanya, "Title")[0]}
          cls={"name2"}
        />
      ) : (
        <p className="name2"> {getDataProperty(props.kampanya, "Title")[0]} </p>
      )}
    </div>
  );
};

export default Dumensiz;
