import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import "./burger.css";
import { useStore } from "../../contextAPI/store/Provider";
import { clear } from "../../contextAPI/actions/LoginAction";
import Icon from "@material-ui/core/Icon";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import ListAltIcon from '@material-ui/icons/ListAlt';
const Menu3 = ({ close,img }) => {
  const history = useHistory();
  // eslint-disable-next-line
  const [{ isLogged, user }, dispatch] = useStore("");
  const handleOnClickKmp = useCallback(
    () => history.push("/anasayfa"),
    [history]
  );
  const handleOnClickKmpBgs = useCallback(
    () => history.push("/bagisListe"),
    [history]
  );
  const handleOnClickExt = () => {
    dispatch(clear());
    history.push("/");
  };
  return (
    <div className="menu">
      <img
        src= {img}
        alt="test"
      />
        
      <ul style={{ paddingTop: "50px" }}>
        <li style={{ paddingTop: "10px" }} onClick={handleOnClickKmp}>
        <ListAltIcon /> <Icon>Tüm Kampanyalar</Icon>
        </li>
        <li style={{ paddingTop: "30px" }} onClick={handleOnClickKmpBgs}>
        <CardGiftcardIcon /> <Icon>Bağış Kampanyaları</Icon>
        </li>
        <li style={{ paddingTop: "30px" }} onClick={handleOnClickExt}>
          <ExitToAppIcon /> <Icon>Çıkış</Icon>
        </li>
      </ul>
    </div>
  );
};
export default Menu3;
