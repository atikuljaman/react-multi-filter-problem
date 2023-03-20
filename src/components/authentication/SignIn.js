import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import swal from "sweetalert";

import "./SignIn.css";

const SignIn = () => {
  const [userStateId, setUserStateId] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    fetch("./api/signInApi.json")
      .then((res) => res.json())
      .then((data) => {
        if (
          data.userStateId === userStateId &&
          data.userPassword === userPassword
        ) {
          const savingUserInfoToLocalStorage = () => {
            // SAVING USER NAME TO LOCAL STORAGE
            localStorage.setItem("UserName", JSON.stringify(data.userName));

            // SAVING USER SESSION ID TO LOCAL STORAGE
            localStorage.setItem(
              "UserSessionId",
              JSON.stringify(data.SessionId)
            );
          };

          savingUserInfoToLocalStorage();

          navigate("/");
          return (
            swal({
              title: "Success",
              text: "You successfully signed in",
              icon: "success",
            }),
            window.location.reload()
          );
        } else if (data.userStateId !== userStateId) {
          swal({
            title: "Error",
            text: "Please enter a valid user state ID",
            icon: "error",
          });
        } else if (data.userPassword !== userPassword) {
          swal({
            title: "Error",
            text: "Please enter a valid password",
            icon: "error",
          });
        }
      });
  };

  console.log(document.body.className);

  return (
    <div className="sign_in_wrapper">
      <form className="sign_in_container" onSubmit={handleFormSubmit}>
        <div className="logo_container">
          <img
            src={logo}
            alt="logo"
            className={
              document.body.className !== "dark_theme"
                ? "logo_active img-fluid"
                : "img-fluid"
            }
          />
        </div>
        <div className="field_container">
          <label>State ID</label>
          <input onChange={(e) => setUserStateId(e.target.value)} />
        </div>
        <br />
        <div className="field_container">
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </div>
        <button className="submit_btn" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default SignIn;
