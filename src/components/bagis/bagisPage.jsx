import React from "react";
import { Row, Card, CardImg, CardTitle, CardImgOverlay } from "reactstrap";
import { getDataProperty } from "../../services/kampanya_service";
import Sticky from "wil-react-sticky";
import "./bagis.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";
import { useHistory } from "react-router-dom";
import KatilPage from "./bagisKatil";
import KatildiPage from "./bagisKatildi";
const BagisPage = (props) => {
  const history = useHistory();
  /*const handleOnClickBack = useCallback(
    () => history.push("/bagisListe"),
    [history]
  );*/
  const goToPreviousPath = () => {
    history.goBack();
  };
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
                    onClick={goToPreviousPath}
                  >
                    <ArrowBackIcon fontSize="medium" />
                  </IconButton>
                </div>
                <CardTitle tag="h5" className="yazi">
                  Bağış Kampanyası
                </CardTitle>
              </CardImgOverlay>
            </Card>
          </div>
        </Row>
      </Sticky>
      <div className="container">
        <Row>
          <div className="exdiv">
            <Card
              color="link"
              style={{ borderRadius: "10px", height: "270px" }}
            >
              <CardImg
                src={getDataProperty(props.kmp, "ExternalLink")[0]}
                alt="Card image cap"
                width="100%"
                height="100%"
              />
            </Card>
          </div>
        </Row>
        <Row>
          <h5>{props.kmp.CampaignName} </h5>
          <br /> <br />
          <p>{getDataProperty(props.kmp, "ShortExplanation")[0]}</p>
        </Row>
        <br />
        {props.atd ? (
          <KatildiPage />
        ) : (
          <KatilPage id={props.kmp.CampaignId} usr={props.usr} />
        )}
        <Row>
          <a
            style={{
              marginLeft: "85px",
              marginBottom: "30px",
              color: "rgb(50, 50, 50)",
            }}
            href="/istatistikler"
          >
            Güncel Verileri Görmek için Tıklayınız
          </a>
        </Row>
      </div>
    </div>
  );
};

export default BagisPage;
