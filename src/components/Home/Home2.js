import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        <Col md={8} className="home-about-description">
  <h1 style={{ fontSize: "2.6em" }}>
    LET ME <span className="purple"> INTRODUCE </span> MYSELF
  </h1>
  <p className="home-about-body">
    I have a passion for programming and continuously strive to enhance my skills. Over time, I have developed a strong foundation in
    <i>
      <b className="purple"> C++, JavaScript, and HTML/CSS. </b>
    </i>
    <br />
    <br />
    My field of interest includes building innovative &nbsp;
    <i>
      <b className="purple">Web Technologies and Products</b>
    </i>
    , with a keen focus on developing seamless user experiences and responsive interfaces.
    <br />
    <br />
    I am particularly drawn to <b className="purple">front-end development</b>, leveraging
    <i>
      <b className="purple"> React.js</b>
    </i>
    &nbsp; to create dynamic and interactive web applications.
    <br />
    <br />
    I also have experience in working with
    <i>
      <b className="purple"> RESTful APIs</b>
    </i>
    &nbsp; and integrating them into front-end projects to ensure efficient data communication and processing.
    <br />
    <br />
    Whenever possible, I apply my passion for problem-solving and product development using modern technologies and tools like
    <i>
      <b className="purple"> Git, GitHub, and Firebase</b>
    </i>.
  </p>
</Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
