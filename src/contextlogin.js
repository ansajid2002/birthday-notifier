import React, { useContext, createContext, useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import {app} from "./firebaseConfig"
const myContext = createContext();

const ContextPro = (props) => {
  let auth = getAuth();
  let googleProvider = new GoogleAuthProvider();
  let facebookProvider = new FacebookAuthProvider();
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //login

  const [loginData, setLoginData] = React.useState({
    email: "",
    password: "",
  });
  const handleChangeLogin = (event) => {
    const { name, value } = event.target;
    setLoginData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmitLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, loginData.email, loginData.password)
      .then((response) => {
        setIsLoggedIn(true);
        alert("logged in successfully");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
console.log(loginData)
  //sign up
  const [signupData, setSignupData] = React.useState({
    email: "",
    password: "",
  });
  const [isAccount, setIsAccount] = React.useState(false);

  const handleChangeSignup = (event) => {
    const { name, value } = event.target;
    setSignupData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmitSignup = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, signupData.email, signupData.password)
      .then((response) => {
        setSignupData({ email: "", password: "" });
        alert("account created");
        setIsAccount(true);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  //same for both

  const useGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((response) => {
        alert("logged in");
        setIsLoggedIn(true);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const useFacebook = () => {
    signInWithPopup(auth, facebookProvider)
      .then((response) => {
        alert("logged in");
        setIsLoggedIn(true);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <myContext.Provider
      value={{
        
        isLoggedIn,
        signupData,
        loginData,
        handleChangeLogin,
        isAccount,
        handleSubmitLogin,
        handleChangeSignup,
        handleSubmitSignup,
        useFacebook,
        useGoogle,
      }}
    >
      {props.children}
    </myContext.Provider>
  );
};

export const useGlobalContextlogin = () => {
  return useContext(myContext);
};

export default ContextPro;
