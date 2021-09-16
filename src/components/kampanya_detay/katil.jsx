import React from "react";
import { Row, Button } from "reactstrap";
import "./page.css";
import { saveCustomerAnswer } from "../../services/kampanya_service";
import { toast } from "react-toastify";
import { useHistory, Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useStore } from "../../contextAPI/store/Provider";
import { getCustomerDefined } from "../../services/kampanya_service";
import { setUSer } from "../../contextAPI/actions/LoginAction";
toast.configure();
const Katil = (props) => {
  // eslint-disable-next-line
  const [{ user }, dispatch] = useStore("");
  const history = useHistory();
  const notifySuccess = (e) =>
    toast.success(e, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const saveCustomer = () => {
    saveCustomerAnswer(props.id, props.usr.customerNo)
      .then((response) => {
        getCustomerDefined(props.usr.customerNo)
          .then((response) => {
            if ((response.data).length !== 0) {
              const user2 = props.usr;
              user2.customerDef = response.data;
              dispatch(setUSer(user2));
              notifySuccess("Başarılı bir şekilde katılım sağlandı!");
              history.push("/anasayfa");
            } else {
              getCustomerDefined(props.usr.customerNo)
                .then((response) => {
                  if ((response.data).length !== 0) {
                    const user2 = props.usr;
                    user2.customerDef = response.data;
                    dispatch(setUSer(user2));
                    notifySuccess("Başarılı bir şekilde katılım sağlandı!");
                    history.push("/anasayfa");
                  } else {
                    notifySuccess(
                      "Başarılı bir şekilde katılım sağlandı! Tekrar giriş yapınız"
                    );
                    history.push("/");
                  }
                })
                .catch((e) => {
                  console.log(e);
                });
            }
          })
          .catch((e) => {
            console.log(e);
          });
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="myDiv">
      <Row>
        <Button
          className="button"
          color="danger"
          style={{ borderRadius: "30px" }}
          onClick={saveCustomer}
        >
          İlgileniyorum
        </Button>
      </Row>
      <Row>
        <Link className="link" to="/anasayfa">
          {" "}
          İlgilenmiyorum
        </Link>
      </Row>
    </div>
  );
};

export default Katil;
