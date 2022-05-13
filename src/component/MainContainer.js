import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import FormContainer from "./FormContainer";
import UserContainer from "./UserContainer";

const MainContainer = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainContainer;
