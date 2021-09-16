import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LOGIN_FIELDS } from "./MassageBundle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import "./LoginPage.css";
import { useStore } from "../../contextAPI/store/Provider";
import { setUSer } from "../../contextAPI/actions/LoginAction";
import { getCustomerDefined } from "../../services/kampanya_service";
const eye = <FontAwesomeIcon icon={faEye} />;
toast.configure();
const LoginPage = (props) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [usernameError, setUserNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const history = useHistory();
  // eslint-disable-next-line
  const [{ isLogged }, dispatch] = useStore();

  const handleOnChangeUserName = (e) => {
    setUserName(e.target.value);
    validateUserName();
  };
  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
    validatePassword();
  };
  const togglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const validateUserName = () => {
    setUserNameError(username.length > 0 ? null : "Boş Bırakılamaz!");
  };

  const validatePassword = () => {
    setPasswordError(password.length > 0 ? null : "Boş Bırakılamaz!");
  };
  const notifyError = (e) =>
    toast.error(e, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    const notifyWarn = (e) =>
    toast.warn(e, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
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
  const onSubmit = async (e) => {
    if ("123" === password && username > 0) {
      getCustomerDefined(username)
        .then((response) => {
          if ((response.data).length > 0) {
            const user = {
              customerNo: username,
              seenStories: ["test"],
              customerDef: response.data,
              stories: props.str,
              defs: props.def,
              donates: props.donate,
            };
            dispatch(setUSer(user));
            notifySuccess("Giriş Başarılı");
            history.push("/anasayfa");
          } else {
            getCustomerDefined(username)
              .then((response) => {
                if ((response.data).length > 0) {
                  const user = {
                    customerNo: username,
                    seenStories: ["test"],
                    customerDef: response.data,
                    stories: props.str,
                    defs: props.def,
                    donates: props.donate,
                  };
                  dispatch(setUSer(user));
                  notifySuccess("Giriş Başarılı");
                  history.push("/anasayfa");
                } else {
                  const user = {
                    customerNo: username,
                    seenStories: ["test"],
                    customerDef: response.data,
                    stories: props.str,
                    defs: props.def,
                    donates: props.donate,
                  };
                  dispatch(setUSer(user));
                  notifyWarn("Server is too busy, You may need relogin again!");
                  history.push("/anasayfa");
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
    } else {
      notifyError("Giriş bilgileri hatalı!");
    }
  };
  return (
    <div>
      <div className="Login">
        <div className="loginImage">
          <img
            src="https://i.ibb.co/qyR24Fc/Microsoft-Teams-image-16.png"
            width="250"
            style={{
              position: "relative",
              paddingTop: 120,
              zIndex: 9,
              paddingBottom: 40,
            }}
            alt="login"
          />
        </div>
        <form onSubmit={onSubmit}>
          <div>
            <div className="fields">
              <br />
              <input
                type="text"
                name="Username"
                className={`${usernameError ? "error" : ""}`}
                placeholder={`${
                  usernameError ? usernameError : "TCKN/MüşteriNo"
                }`}
                onChange={handleOnChangeUserName}
                onBlur={validateUserName}
                autoComplete="Username"
                data-testid="input1"
                required
              />
            </div>
            <div className="pass-wrapper">
              <br />
              <input
                type={passwordShown ? "text" : "password"}
                name="Password"
                className={`${passwordError ? "error" : ""}`}
                placeholder={`${passwordError ? passwordError : "Şifre"}`}
                onChange={handleOnChangePassword}
                onBlur={validatePassword}
                autoComplete="Password"
                data-testid="input2"
                required
              />
              <i onClick={togglePasswordVisibility}>{eye}</i>
            </div>

            <br />
            <div className="buttons">
              <button
                style={{
                  boxShadow: "2px 2px #888888",
                  fontWeight: "lighter",
                  position: "relative",
                  marginRight: 10,
                  zIndex: 9,
                  borderRadius: "30px",
                }}
                type="button"
                variant="success btn-block"
                data-testid="loginbutton"
                onClick={onSubmit}
                className="btn btn-light"
              >
                <strong>{LOGIN_FIELDS.LOGIN}</strong>
              </button>
              {"    "}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
