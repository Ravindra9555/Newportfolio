import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import covid from "../../Assets/Projects/covid.png";
import healthcare from "../../Assets/Projects/healthcare.png";
import shivam from "../../Assets/Projects/shivam.png";
import weather from "../../Assets/Projects/weather.png";
import expense from "../../Assets/Projects/expense.png";

function Projects() {
  return (
    // <Container fluid className="">
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expense}
              isBlog={false}
              title="Expense- Tracker "
              description="Managing your finances has never been simpler. With ExpenseTrackerPro, you can track your spending, create budgets, and save more effectively—all in one place."
              ghLink="https://github.com/Ravindra9555/Expense-Tracker-web-application-react-bootstrap.git"
              demoLink="https://expensetracker-money.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covid}
              isBlog={false}
              title="Covid Tracker"
              description="React-based COVID tracker app that provides information on prevention measures, and symptoms. Show real-time covid status.It is responsive and compatible with all devices."
              ghLink="https://github.com/Ravindra9555/Covid-Tracker"
              demoLink="https://covid19-trac.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather forecast"
              description=" we can weather Forecast of any city just in oneclick"
              ghLink="https://github.com/Ravindra9555/CodeClauseInternship_Weather_app_using_api"
              demoLink="https://code-clause-internship-weather-app-using-api.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shivam}
              isBlog={false}
              title="Shivam Medical"
              description="Created a website for Shivam Medical Store that allows users to explore the store, book appointments, and medical staff• Integrated EmailJS API to enable appointment booking and email notifications."
              ghLink="https://github.com/Ravindra9555/Shivam_medical"
              demoLink="https://github.com/Ravindra9555/Shivam_medical"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={healthcare}
              isBlog={false}
              title="Healthcare Space"
              description="On one click find the best Doctor in Jhansi and book your appointment.• Utilized responsive design to ensure compatibility across all devices."
              ghLink="https://github.com/shyamjitripathi/Healthcare-Space/"
              demoLink="https://shyamjitripathi.github.io/Healthcare-Space/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
