import React from "react";
import "./App.scss";
import { MainPage } from "../Pages/Main";
import { HeaderApp } from "./Components/Header/ui";
import { FooterApp } from "./Components/Footer/ui";

function App() {
  return (
    <div className="App">
      <HeaderApp />
      <MainPage />
      <FooterApp />
    </div>
  );
}

export default App;
