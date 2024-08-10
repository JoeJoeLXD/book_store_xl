// src/App.js
import React from "react";
import { Header, Footer } from "./components";
import { AllRoutes } from "./routes/AllRoutes";
import "./index.css";

function App() {
  return (
    <div className="dark:bg-dark">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
