import React, { useState, useEffect } from "react";
import Home from "./Components/Home/Home";
import Preloader from "./Components/pre";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import "./style.css";
import "./App.css";

function App() {
  const [load, upadateLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
