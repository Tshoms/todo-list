import React from "react";
import Button from "@material-ui/core/Button";
import "./Header.css";
import { Link } from "react-router-dom";


function Header() {
  return (
    <div className="header">
      <h2>Ajouter une tache ?</h2>
      <Button variant="contained" color="primary" href="#contained-buttons">
      <Link to="/add">ajouter</Link>
      </Button>
    </div>
  );
}

export default Header;
