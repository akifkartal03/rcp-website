import React from "react";
import { Row, Button } from "reactstrap";
import { NavLink as RouterNavLink } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import "./error.css"
const ErrorPage = (props) => {
  return (
    <div >
      <div className="mySc2">
        <Row>
          <Alert severity="error" variant="outlined">
            Server Hatası Tekrar Giriş Yapınız!
          </Alert>
        </Row>
      </div>
      <div className="altbar">
        <Row>
          <Button
            className="button"
            color="primary"
            style={{ borderRadius: "30px" }}
            tag={RouterNavLink}
            to={"/anasayfa"}
          >
            Anasayfaya Git
          </Button>
        </Row>
      </div>
    </div>
  );
};

export default ErrorPage;
