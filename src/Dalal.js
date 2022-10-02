import React from "react";

import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Peoples from "./pages/Peoples";
import Upbd from "./pages/Upbd";
import Update from "./pages/Update"
import Signup from "./pages/Signup";
import Login from "./pages/Login";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Modals from "./components/Modals";
import { useGlobalContextlogin } from "./contextlogin";

const Dalal = () => {
  const { isLoggedIn } = useGlobalContextlogin();
  console.log(isLoggedIn)
  return (
    <>
      {isLoggedIn ? (
        <div>
          <Header />
          
          <Modals />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/Upbd" element={<Upbd />} />
            <Route path="/peoples" element={<Peoples />} />
            <Route path= "/update" element={<Update/>}/>
          </Routes>
          <Sidebar />
        </div>
      ) : (
        <div>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </div>
      )}
    </>
  );
};

export default Dalal;
