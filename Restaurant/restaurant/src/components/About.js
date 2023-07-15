import React from "react";
import banner from "../assets/aboutus.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about container" style={{ textAlign: "center" }}>
      <div
        className="aboutTop row"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          position: "relative",
          margin: 0,
          padding: 0,
        }}
      ></div>
      <h1 style={{ position: "relative", zIndex: 1 }}>About Us</h1>
      <div className="aboutBottom row" style={{ margin: 0, padding: 0 }}>
        <p style={{ margin: 0, padding: 0 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nam hic
          harum eaque, laudantium fugiat, iusto minus soluta molestias dolore,
          ad accusamus qui tempore accusantium praesentium earum numquam odit
          rem! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Perferendis vero iure suscipit aspernatur architecto. Dolor sapiente
          nihil ratione alias quasi itaque iste nostrum aperiam distinctio, amet
          corrupti, provident doloremque eligendi. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ea quidem inventore ex expedita,
          repellendus totam nostrum, necessitatibus maiores ab consequatur,
          molestias quae architecto labore ratione explicabo impedit? Molestiae,
          numquam similique?
        </p>
      </div>
    </div>
  );
}

export default About;
