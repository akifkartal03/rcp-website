import React, { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import DetayPage from "./bagisPage";
import PacmanLoader from "../loading/pacman";
const BagisDetay = (props) => {
  const history = useHistory();
  const handleOnClickKmp = useCallback(() => history.push("/error"), [history]);
  const [kampanya, setKampanya] = useState(null);
  const [isAttendance, setAttendance] = useState(false);
  const [isLoad, setLoad] = useState(null);
  const id =
    window.location.pathname.split("/")[
      window.location.pathname.split("/").length - 1
    ];
  useEffect(() => {
    // eslint-disable-next-line
    props.usr.donates.map((value) => {
      // eslint-disable-next-line
      if (value.CampaignId == id) {
        setKampanya(value);
      }
    });
    // eslint-disable-next-line
    if (props.usr.customerDef.length != 0) {
      // eslint-disable-next-line
      props.usr.customerDef.map((value, index) => {
        // eslint-disable-next-line
        if (value.CampaignId == id) {
          // eslint-disable-next-line
          if (value.CustomerEnrollmentStatus == 1) {
            setAttendance(true);
            setLoad(true);
          } else {
            setAttendance(false);
            setLoad(true);
          }
        }
      });
      setLoad(true);
    } else {
      handleOnClickKmp();
    }
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      {kampanya && isLoad ? (
        <DetayPage kmp={kampanya} atd={isAttendance} usr={props.usr}/>
      ) : (
        <PacmanLoader />
      )}
    </div>
  );
};

export default BagisDetay;
