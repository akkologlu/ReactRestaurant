import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/up.png";
import "../styles/Home.css";
function Home() {
  return (
    <div className="mainPage" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="order">
        <Link to="/menu">
          <button>Discover</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
