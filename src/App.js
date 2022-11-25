import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./component/Nav";
import Main from "./pages/Main";
import Footer from "./component/Footer";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
