import React from "react";
import { Row, Button,Col } from "reactstrap";
import { saveCustomerAnswer } from "../../services/kampanya_service";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useStore } from '../../contextAPI/store/Provider';
import { getCustomerDefined } from "../../services/kampanya_service";
import { setUSer } from "../../contextAPI/actions/LoginAction";
toast.configure();
const BagisKatil = (props) => {
  const history = useHistory();
  // eslint-disable-next-line
  const [{  user }, dispatch] = useStore('');
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
              if (response.data) {
                const user2 = props.usr;
                user2.customerDef = response.data;
                dispatch(setUSer(user2));
                notifySuccess("Başarılı bir şekilde katılım sağlandı!");
                history.push("/anasayfa");
              } else {
                getCustomerDefined(props.usr.customerNo)
                  .then((response) => {
                    if (response.data) {
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
    <div >
      <Row>
          <Col
            xs="5"
            style={{ marginLeft: "50px", marginBottom: "20px" }}
          >
            {" "}
            <Button style={{ width:"130px", borderRadius: "30px",backgroundColor:"#205296",borderColor:"#205296" }}>Paylaş</Button>
          </Col>
          <Col xs="4">
            <Button style={{ width:"130px", borderRadius: "30px",backgroundColor:"#d11242",borderColor:"#d11242" }} onClick={saveCustomer}>Katıl</Button>
          </Col>
        </Row>
    </div>
  );
};

export default BagisKatil;
