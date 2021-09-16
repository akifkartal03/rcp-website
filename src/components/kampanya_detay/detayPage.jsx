import React from "react";
import { Row, Card, CardImg } from "reactstrap";
import "./page.css";
import { getDataProperty } from "../../services/kampanya_service";
import Sticky from "wil-react-sticky";
import NotEnrolledPage from "./katil";
import EnrolledPage from "./katildi";
import ReactHtmlParser from "react-html-parser";
const DetayPage = (props) => {
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
            <Card
              color="link"
              style={{ borderColor: "#205296", height: "270px" }}
            >
              <CardImg
                src={getDataProperty(props.kmp, "ImageUrl")[0]}
                alt="img"
                width="100%"
                height="100%"
                style={{ padding: "1px" }}
              />
            </Card>
          </div>
        </Row>
        <Row>
          <h5>{props.kmp.CampaignName}</h5>
          <br />
          <br />
          <p>
            {ReactHtmlParser(
              getDataProperty(props.kmp, "CampaignConditions")[0]
            )}
          </p>
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

export default DetayPage;
