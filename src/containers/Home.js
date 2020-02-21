import React from "react";
import "./Home.css";
import dribble  from './dribble.gif'

export default function Home() {
  return (
    <div className="Home">
      <div className="lander">
        <h1>Qdox</h1>
        <p>A Document Handling App</p>
        <img src = {dribble} alt = "Doc App" />
      </div>
    </div>
  );
}