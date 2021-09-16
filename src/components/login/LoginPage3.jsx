import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";
import "./LoginPage.css";
import TextField from "@material-ui/core/TextField";
toast.configure();
const LoginPage3 = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [usernameError, setUserNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const history = useHistory();

  const handleOnChangeUserName = (e) => {
    setUserName(e.target.value);
    validateUserName();
  };
  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
    validatePassword();
  };
  const validateUserName = () => {
    setUserNameError(
      username.length > 0 ? null : "Bu alanın doldurulması zorunludur!"
    );
  };

  const validatePassword = () => {
    setPasswordError(
      password.length > 0 ? null : "Bu alanın doldurulması zorunludur!"
    );
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
    setPasswordShown(true);
    if ("123" === password && "12345678910" === username) {
      notifySuccess("Giriş Başarılı");
      history.push("/anasayfa");
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
              <TextField
                id="standard-basic"
                type="text"
                name="Username"
                classes={`${usernameError ? "error" : ""}`}
                placeholder={`${
                  usernameError ? usernameError : "TCKN/MüşteriNo"
                }`}
                onChange={handleOnChangeUserName}
                autoComplete="Username"
              />
            </div>
            <div >
              <br />
              <TextField
                id="standard-basic"
                type={passwordShown ? "text" : "password"}
                name="Password"
                className={`${passwordError ? "error" : ""}`}
                placeholder={`${passwordError ? passwordError : "Şifre"}`}
                onChange={handleOnChangePassword}
                autoComplete="Password"
              />
            </div>

            <br />
            <div className="buttons">
              <button
                style={{
                  boxShadow: "2px 2px #888888",
                  fontFamily: "OpenSans",
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
                <strong>Giriş Yap</strong>
              </button>
              {"    "}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage3;
