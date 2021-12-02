import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./fonts.css";

import { Landing } from "pages";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
