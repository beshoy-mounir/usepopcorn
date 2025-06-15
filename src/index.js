import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import Stars from "./stars";

const maxRating = 10;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <div style={{ color: "white" }}>
      {/* <App /> */}
      <Stars maxRating={maxRating} color={"aqua"} />
    </div>
  </StrictMode>
);
