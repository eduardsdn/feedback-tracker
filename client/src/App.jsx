import React from "react";
import GlobalCSS from "./styles/app.module.scss";
import Suggestions from "./pages/Suggestions";
import FeedbackDetail from "./pages/FeedbackDetail";
import AddFeedback from "./pages/AddFeedback";
import Roadmap from "./pages/Roadmap";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = function () {
  return (
    <BrowserRouter>
      <div className={GlobalCSS.app}>
        {/* set up routes */}
        <Routes>
          <Route path="/" element={<Suggestions />} />
          <Route path="/addfeedback" element={<AddFeedback />}></Route>
          <Route path="/feedbackdetail" element={<FeedbackDetail />}></Route>
          <Route path="/roadmap" element={<Roadmap />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
