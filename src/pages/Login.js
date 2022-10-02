import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useGlobalContextlogin } from "../contextlogin";

import fb from "../icons/fb.jpg"
import google from "../icons/google.jpg"
import "../form.css";

const Login = () => {
  const {
    handleChangeLogin,
    handleSubmitLogin,
    isLoggedIn,
    useFacebook,
    useGoogle,
    loginData,
  } = useGlobalContextlogin();

  return (
    <div className="formBox">
      {/* {isLoggedIn ? <Link to = "/home" >go to homepage</Link> : */}
      {isLoggedIn ? (
        <Navigate to="/home" />
      ) : (
        <div className="formclass">
          <h1 className="heading">Log In</h1>
          <h4 className="info">
            New to this site? <Link className="toggle" to="/Signup">Sign Up</Link>
          </h4>

          <div>
            <form onSubmit={handleSubmitLogin}>
              <input
              className="inputs"
                type="email"
                placeholder="Example@gmail.com"
                onChange={handleChangeLogin}
                name="email"
                value={loginData.email}
              />

              <input
                className="inputs"
                type="text"
                placeholder="Password"
                onChange={handleChangeLogin}
                name="password"
                value={loginData.password}
              />
              <button className="submitBtn" type="submit">Log in</button>
            </form>
            <p className="continue">---or Continue with ---</p>
            <button onClick={useFacebook} className="sicon"><img className="icon" src={fb} alt="s"/></button>
            <button onClick={useGoogle} className="sicon" ><img className="icon" src={google} alt="g"/></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
