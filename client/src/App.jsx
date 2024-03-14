import React from "react";
import GlobalCSS from "./styles/app.module.scss";

import Suggestions from "./pages/Suggestions";
import Title from "./components/Title";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = function () {
  return (
    <BrowserRouter>
      <div className={GlobalCSS.app}>
        <Routes>
          <Route path="/" element={<Suggestions />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
