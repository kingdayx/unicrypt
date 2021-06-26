import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Home() {
  return (
    <div className="navbar">
      <div>
        <h1>SafeMemeSwap</h1>
      </div>
      <div className="leftNav">
        <div className="services nav nav1"> Services</div>
        <div className="tokens nav nav1">tokens</div>
        <div className="about nav nav1">about us</div>
        <Link to="/browser" className="launch nav">
          launch app
        </Link>
      </div>
    </div>
  );
}
