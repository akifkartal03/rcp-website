import React, { useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import StoryPage from "./components/story/storyData";
import MainPage from "./components/anasayfa/mainPage";
import DetayPage from "./components/kampanya_detay/kmpDetay";
import GirisPage from "./components/giris/girisData";
import LoginPage from "./components/login/LoginPage2";
import BagisListe from "./components/bagis/bagisData";
import BagisPage from "./components/bagis/bagisDetay";
import ErrorPage from "./components/error/errorPage";
import IstPage from "./components/istatistikler/istatistikPage";
import StoryDetayPage from "./components/story/storyFirstData";
import StoryGecis from "./components/story/storyGecis";
import { Card } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import { useStore } from "./contextAPI/store/Provider";
import { setUSer } from "./contextAPI/actions/LoginAction";
function App() {
  const [store, dispatch] = useStore("");
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("loginState"));
    if (localData.isLogged) {
      dispatch(setUSer(localData.user));
    }
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    localStorage.setItem("loginState", JSON.stringify(store));
  });
  return (
    <div className="cardStyle">
      <div>
        <Card border="dark" style={{ width: "28rem", borderRadius: "0px",marginBottom:"10px" }}>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={GirisPage} />
              <Route path="/login" exact component={LoginPage} />
              <Route path="/istatistikler" exact component={IstPage} />
              <Route path="/anasayfa" exact component={MainPage} />
              <Route path="/bagisListe" exact component={BagisListe} />
              <Route path="/error" exact component={ErrorPage} />
              <Route path="/strgecis/:id" exact component={StoryGecis} />
              <Route path="/story/:id" component={StoryPage} />
              <Route path="/detay/:id" component={DetayPage} />
              <Route path="/bagis/:id" component={BagisPage} />
              <Route path="/strdetay/:id" component={StoryDetayPage} />
            </Switch>
          </BrowserRouter>
        </Card>
      </div>
    </div>
  );
}

export default App;
