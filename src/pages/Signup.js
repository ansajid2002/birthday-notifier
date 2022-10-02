import React from "react";
import { Link } from "react-router-dom";
//---------FIREBASE-----------------//
import { useGlobalContextlogin } from "../contextlogin";
import "../form.css"

const Signup = () => {
  const {
    handleChangeSignup,
    handleSubmitSignup,
    isAccount,
    signupData,
  } = useGlobalContextlogin();

  

  return (
    <div className="formbox">
      <div className="formclass">
        <h1 className="heading">Sign Up</h1>
        <h4 className="info">
          Already a member? <Link className="toggle" to="/">Log In</Link>
        </h4>

        <div>
          <form onSubmit={handleSubmitSignup}>
            {isAccount ? (
              <p className="account-created">Account Created Successfully</p>
            ) : (
              <>
                <input
                  className="inputs"
                  type="email"
                  placeholder="Example@gmail.com"
                  onChange={handleChangeSignup}
                  name="email"
                  value={signupData.email}
                />

                <input
                  className="inputs"
                  type="text"
                  placeholder="Password"
                  onChange={handleChangeSignup}
                  name="password"
                  value={signupData.password}
                />
                <button type="submit" className="submitBtn">Sign Up</button>
              </>
            )}
          </form>
              
        </div>
      </div>
    </div>
  );
};

export default Signup;
