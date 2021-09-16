import React,{ useCallback }  from "react";
import { Row, Button, Col } from "reactstrap";
import "./page.css";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { useHistory } from "react-router-dom";
const Katil2 = (props) => {
  const history = useHistory();
  const handleOnClickBack = useCallback(
    () => history.push("/anasayfa"),
    [history]
  );
  return (
    <div>
      <div className="mySc">
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
      <div className="myDiv">
        <Row>
          <Button
            style={{width:"150px",height:"45px",borderRadius:"30px",backgroundColor:"#205296",borderColor:"#205296"}}
            onClick={handleOnClickBack}
          >
            Geri Dön
          </Button>
        </Row>
      </div>
    </div>
  );
};

export default Katil2;
