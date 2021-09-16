import React, { useState, useEffect } from "react";
import GirisPage from "./girisPage";
import LoginPage from "../login/LoginPage2";
import { getStories,getDefaults,getDonations} from "../../services/kampanya_service";
const GirisData = () => {
  //const [kampanyalar, setKampanylar] = useState(false);
  const [stories, setStories] = useState([]);
  const [defaults, setDefaults] = useState([]);
  const [donations, setDonations] = useState([]);
  //const [customerDefined, setCustomerDefined] = useState([]);
  useEffect(() => {
    waitFunction();
    getStory();
    getDef();
    getDonate();
    // eslint-disable-next-line
  }, []);
  const getStory = () => {
    getStories()
      .then((response) => {
        setStories(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const getDef = () => {
    getDefaults()
      .then((response) => {
        setDefaults(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const getDonate = () => {
    getDonations()
      .then((response) => {
        setDonations(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const delay = ms => new Promise(res => setTimeout(res, ms));
  const waitFunction = async () => {
    await delay(100);
    //setKampanylar(true);
  };
  return (
    <div>
      <main role="main">
        {stories.length && defaults.length && donations.length ? (
          <LoginPage str={stories} def={defaults} donate={donations}/>
        ) : (
            <GirisPage/>
        )}
      </main>
    </div>
  );
};

export default GirisData;
