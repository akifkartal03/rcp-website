import React, { useCallback } from "react";
import {
  Row,
  Card,
  CardImg,
  CardTitle,
  CardImgOverlay,
  CardBody,
  CardText,
} from "reactstrap";
import Sticky from "wil-react-sticky";
import "./ist.css";
import { useHistory,Link } from "react-router-dom";
import { reveal as Menu } from "react-burger-menu";
import Menu2 from "../menu/menu3";
import { VictoryChart, VictoryAxis, VictoryBar } from "victory";
const IstatikPage = (props) => {
  const history = useHistory();
  // eslint-disable-next-line
  const handleOnClickBack = useCallback(
    () => history.push("/bagisListe"),
    [history]
  );
  var styles = {
    bmBurgerButton: {
      position: "absolute",
      width: "22px",
      height: "15px",
      left: "20px",
      top: "10px",
    },
    bmBurgerBars: {
      background: "#ffffff",
    },
    bmBurgerBarsHover: {
      background: "#ffffff",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#ffffff",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "98%",
      transform: "translate3d(0%, 0px, 0px) !important",
    },
    bmMenu: {
      background: "#ffffff",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#2c2c2b",
      padding: "0.8em",
    },
    bmItem: {
      display: "inline-block",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
  };
  const data = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 },
    { quarter: 5, earnings: 13000 },
    { quarter: 6, earnings: 16500 },
    { quarter: 7, earnings: 14250 },
    { quarter: 8, earnings: 19000 },
    { quarter: 9, earnings: 13000 },
    { quarter: 10, earnings: 16500 },
  ];
  return (
    <div>
      <main role="main">
        <Sticky>
          <header>
            <div className="bnt5">
              <Menu width="270px" noOverlay styles={styles} noTransition>
                <Menu2 close={"close"} img={"https://i.ibb.co/wJwDMXj/yeni.png"} />
              </Menu>
            </div>
            <Card color="link" className="baslik3">
              <CardImg
                className="img6"
                src="https://i.ibb.co/ZLFHDns/ist.png"
                alt="Card image cap"
              />
              <CardImgOverlay>
                <CardTitle tag="h5" className="yazi2">
                  Kampanya İstatistikleri
                </CardTitle>
              </CardImgOverlay>
            </Card>
          </header>
        </Sticky>
        <div className="container">
          <Row>
            <div className="exdiv">
              <VictoryChart
                // domainPadding will add space to each side of VictoryBar to
                // prevent it from overlapping the axis
                domainPadding={50}
              >
                <VictoryAxis
                  // tickValues specifies both the number of ticks and where
                  // they are placed on the axis
                  tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                  tickFormat={[
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                  ]}
                />
                <VictoryAxis
                  dependentAxis
                  // tickFormat specifies how ticks should be displayed
                  tickFormat={(x) => `${x / 1000}k`}
                />
                <VictoryBar
                  data={data}
                  x="quarter"
                  y="earnings"
                  style={{
                    data: { fill: "#205296" },
                  }}
                />
              </VictoryChart>
            </div>
          </Row>
          <Row>
            <div>
              <Card className="text-center">
                <CardBody>
                  <CardText>
                    <small className="text-muted">Katılan Kişi Sayısı</small>
                  </CardText>
                  <CardTitle tag="h5">255.239</CardTitle>
                </CardBody>
              </Card>
            </div>
          </Row>
          <Row>
            <div>
              <Card
                className="text-center"
                style={{ backgroundColor: "rgb(247, 177, 177)" }}
              >
                <CardBody>
                  <CardText>
                    <small className="text-muted">Hedef</small>
                  </CardText>
                  <CardTitle tag="h5">456.875</CardTitle>
                </CardBody>
              </Card>
            </div>
          </Row>
          <Row>
            <div>
              <Card className="text-center">
                <CardBody>
                  <CardText>
                    <small className="text-muted">Toplam</small>
                  </CardText>
                  <CardTitle tag="h5">150K</CardTitle>
                </CardBody>
              </Card>
            </div>
          </Row>
          <br />
          <Row>
            <Link
              style={{
                marginLeft: "180px",
                marginBottom: "20px",
                color: "#205296",
                fontWeight: "bold",
              }}
              to="/anasayfa"
            >
              Ana Sayfa
            </Link>
          </Row>
        </div>
      </main>
    </div>
  );
};

export default IstatikPage;
