import React from "react";
import { Row,Col } from "reactstrap";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
const Katil5 = (props) => {
  return (
    <div>
      <div className="mySc5">
      <Row>
          <Col xs="2">
            <CheckCircleOutlineIcon
              fontSize="large"
              style={{ color: "green" }}
            />
          </Col>
          <Col xs="auto">
            <p className="alText">Bu Kampanyaya Katıldınız!</p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Katil5;
