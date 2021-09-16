import React from "react";
import Kampanyalar from "./kampanyalar";
import { Row } from "reactstrap";
import "./common.css";
import BagisKart from "../bagis/bagisCard";
const MainPage23 = (props) => {
  return (
    <div className="myColor">
      {props.def.map((value, index) => {
        return (
          <Row>
            {index % 2 !== 0 ? (
              <div>
                <Kampanyalar kampanya={value} />
              </div>
            ) : (
              <div>
                <Kampanyalar kampanya={value} />
                {index === 4 ? (
                  <BagisKart kampanya={props.dona[index]} />
                ) : (
                  <BagisKart kampanya={props.dona[index + 1]} />
                )}
              </div>
            )}
          </Row>
        );
      })}
    </div>
  );
};

export default MainPage23;
