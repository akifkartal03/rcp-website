import React from "react";
import { Row, Card, CardImg } from "reactstrap";
import "./story.css";
import { getDataProperty } from "../../services/kampanya_service";
import Sticky from "wil-react-sticky";
import NotEnrolledPage from "../kampanya_detay/katil";
import EnrolledPage from "../kampanya_detay/katildi";
const StoryDetay = (props) => {
  return (
    <div>
      <Sticky>
        <Row>
          <img
            src="https://i.ibb.co/L6jr4zq/test5.png"
            alt="head"
            width="500px"
            height="70"
          />
        </Row>
      </Sticky>
      <div className="container">
        <Row>
          <div className="exdiv">
            <Card color="link"
              style={{ borderColor: "#205296", height: "320px" }}
            >
              <CardImg
                src={getDataProperty(props.kmp, "MediaUrl")[0]}
                alt="img"
                width="100%"
                height="100%"
                style={{ padding: "1px" }}
              />
            </Card>
          </div>
        </Row>
        <Row>
          
          <h5>{getDataProperty(props.kmp, "Title")[0]}</h5>
          <br/><br/>
          <p>{props.kmp.CampaignPrizesExp}</p>
        </Row>
        <br />
        <Row>
          {props.atd ? (
            <EnrolledPage />
          ) : (
            <NotEnrolledPage id={props.kmp.CampaignId} usr={props.usr} />
          )}
        </Row>
      </div>
    </div>
  );
};

export default StoryDetay;
