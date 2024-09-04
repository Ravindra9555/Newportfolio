import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ravindra Kumar</span>
            from <span className="purple">India</span>.
            <br />
            I am a Computer Science graduate with experience as a MERN Stack Developer.
            <br />
            Currently, I am working as a Front-End Developer at Tecraki Technology Solutions PVT. LTD.
            <br />
            I have a passion for problem-solving and continuous learning, with skills in C++, C, JavaScript, ReactJS, Git, and GitHub.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Participating in Hackathons
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
          </ul>

          <p style={{ color: "#4778DC" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="purple">- Ravindra Kumar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
