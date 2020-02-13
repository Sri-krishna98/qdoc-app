import React from "react";
import "./Home.css";
import Qdocs from './Qdocs.png'

export default function Home() {
  return (
    <div className="Home">
      <div className="lander">
        <h1>Qdocs</h1>
        <p>A Document Handling App</p>
        <img src = {Qdocs} />
      </div>
    </div>
  );
}