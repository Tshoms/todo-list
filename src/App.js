import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "./App.css";
import "./Header.css";
import "./Main.css";
import Header from "./Header";
import Main from "./Main";

function App() {
  return (
    <div className="App">
      <div className="app__body">
        <Header />
        <Main />
      </div>
      <Button variant="contained" color="secondary">
        <Link to="/login"> déconnexion</Link>
      </Button>
    </div>
  );
}

export default App;
