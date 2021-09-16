import React, { useCallback } from "react";
import {
  Row,
  Card,
  CardImg,
  CardTitle,
  CardImgOverlay,
} from "reactstrap";
import Sticky from "wil-react-sticky";
import "./bagis.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";
import { useHistory } from "react-router-dom";
import BagisKart from "./bagisCard";
const BagisListe = (props) => {
  const history = useHistory();
  const handleOnClickBack = useCallback(
    () => history.push("/anasayfa"),
    [history]
  );
  return (
    <div>
      <Sticky>
        <Row>
          <div className="baslik2">
            <Card color="link" className="baslik">
              <CardImg
                className="img5"
                src="https://i.ibb.co/cFq0GNd/last55.jpg"
                alt="Card image cap"
              />
              <CardImgOverlay>
                <div className="back">
                  <IconButton
                    aria-label="delete"
                    size="small"
                    onClick={handleOnClickBack}
                  >
                    <ArrowBackIcon fontSize="medium" />
                  </IconButton>
                </div>
                <CardTitle tag="h5" className="yazi">
                  Bağış Kampanyaları
                </CardTitle>
              </CardImgOverlay>
            </Card>
          </div>
        </Row>
      </Sticky>
      <div>
        {props.arr.map((value, index) => {
          return (
            <Row>
              <div>
                <BagisKart kampanya={value} />
              </div>
            </Row>
          );
        })}
      </div>
    </div>
  );
};

export default BagisListe;
