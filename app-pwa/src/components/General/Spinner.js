import React from "react";

import "./Spinner.css";

export const Spinner = () => (
  <div className="center">
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);
