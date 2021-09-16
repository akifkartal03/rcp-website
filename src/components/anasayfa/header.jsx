import React, { useState, useEffect } from "react";
import { Navbar, Row } from "reactstrap";
import Kampanyalar from "./kmpData";
import Circle from "./circle";
import { Paper } from "@material-ui/core";
import Sticky from "wil-react-sticky";
import { reveal as Menu } from "react-burger-menu";
import "./nav_test.css";
import "./common.css";
import Menu2 from "../menu/menu3";
const Header = (props) => {
  const [stor, setStor] = useState(false);
  const delay = ms => new Promise(res => setTimeout(res, ms));
  useEffect(() => {
    waitFunction();
    
    // eslint-disable-next-line
  }, []);
  const waitFunction = async () => {
    await delay(0);
    setStor(true);
  };
  return (
    <div>
      <main role="main">
        <Sticky>
          <header>
            <Menu width="270px" noOverlay noTransition>
              <Menu2 close={"close"} img={"https://i.ibb.co/HYh40kz/test1.png"}/>
            </Menu>
            <Paper elevation={23}>
              <Row>
                <img
                  src="https://i.ibb.co/L6jr4zq/test5.png"
                  alt="head"
                  width="100%"
                  height="70"
                />
              </Row>
              <Row>
                <Navbar color="link" link>
                  {props.str.map((kmp, index) => {
                    return <Circle kampanya={kmp} seenS={props.seen} />;
                  })}
                </Navbar>
              </Row>
            </Paper>
          </header>
        </Sticky>
        {stor ? <Kampanyalar def={props.def} dona={props.dona}/> : <div/>}
      </main>
    </div>
  );
};

export default Header;
