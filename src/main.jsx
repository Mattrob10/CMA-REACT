import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ArtContextProvider } from "./Components/ArtContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <React.StrictMode>
      <ArtContextProvider>
        <App />
      </ArtContextProvider>
    </React.StrictMode>
  </Router>
);
