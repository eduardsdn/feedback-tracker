import React from "react";
import GlobalCSS from "./styles/app.module.scss";

import Suggestions from "./pages/Suggestions";
import AddFeedback from "./pages/AddFeedback";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = function () {
  return (
    <BrowserRouter>
      <div className={GlobalCSS.app}>
        <Routes>
          <Route path="/" element={<Suggestions />} />
          <Route path="/addfeedback" element={<AddFeedback />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
