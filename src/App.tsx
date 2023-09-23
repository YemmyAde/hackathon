import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AppRoute } from "./routes";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
function App() {
  return (
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  );
}

export default App;
