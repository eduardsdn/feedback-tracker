import React from "react";
import GlobalCSS from "./styles/app.module.scss";

import Suggestions from "./pages/Suggestions";

const App = function () {
  return (
    <div className={GlobalCSS.app}>
      <Suggestions />
    </div>
  );
};

export default App;
