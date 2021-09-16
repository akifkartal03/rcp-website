import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Image } from "react-bootstrap";
import { Row, Button } from "reactstrap";
import "../kampanya_detay/page.css";
const LoginPage = () => {
  return (
    <div className="container">
      <Row>
        <Image className="detay" src={"https://i.ibb.co/L0x29v0/deniz.jpg"} />
      </Row>
      <br />
      <br />
      <br />
      <br />
      <Row>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 10,
            paddingBottom: 50,
          }}
        >
          <Button
            className="button"
            color="primary"
            tag={RouterNavLink}
            to="/anasayfa"
          >
            {" "}
            <p className="text">Login</p>{" "}
          </Button>
        </div>
      </Row>
    </div>
  );
};

export default LoginPage;
