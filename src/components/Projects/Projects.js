

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import { FaBriefcase, FaCode } from "react-icons/fa";

// Project Images
import covid from "../../Assets/Projects/covid.png";
import healthcare from "../../Assets/Projects/healthcare.png";
import shivam from "../../Assets/Projects/shivam.png";
import weather from "../../Assets/Projects/weather.png";
import expense from "../../Assets/Projects/expense.png";
import bahelhealth from "../../Assets/Projects/bael.png";
import saarthi from "../../Assets/Projects/ssarthi.png";
import projectflow  from "../../Assets/Projects/projectflow.png"

function Projects() {
  // Industry Projects Data
  const industryProjects = [
    {
      imgPath: bahelhealth,
      title: "Bahel Health",
      description: "Comprehensive healthcare platform connecting patients with specialists.",
      ghLink: "#",
      demoLink: "https://bahelhealth.com",
      isBlog: false
    },
    {
      imgPath: saarthi,
      title: "Saarthi Sangha",
      description: "Mental health support platform providing counseling services.",
      ghLink: "#",
      demoLink: "https://saarthisangha.org",
      isBlog: false
    },
    
  ];

  // Personal Projects Data (original projects)
  const personalProjects = [
    {
      imgPath: projectflow,
      title: "Project Flow",
      description: "treamline your workflow with our powerful project management platform designed for individuals and teams of all sizes.Start for Free",
      ghLink: "https://github.com/Ravindra9555/Shivam_medical_MUI",
      demoLink: "https://shivampharmacy.vercel.app/",
      isBlog: false
    },
    {
      imgPath: shivam,
      title: "Shivam Medical & Pharmacy",
      description: "E-commerce platform for medical supplies with inventory management.",
      ghLink: "https://github.com/Ravindra9555/Project_management_App",
      demoLink: "https://projectflow-eight.vercel.app/",
      isBlog: false
    },
    {
      imgPath: expense,
      title: "Expense Tracker",
      description: "Financial management application with budget tracking tools.",
      ghLink: "https://github.com/Ravindra9555/Expense-Tracker-web-application-react-bootstrap.git",
      demoLink: "https://expensetracker-money.vercel.app/",
      isBlog: false
    },
    {
      imgPath: covid,
      title: "COVID-19 Tracker",
      description: "Real-time pandemic monitoring application showing global statistics.",
      ghLink: "https://github.com/Ravindra9555/Covid-Tracker",
      demoLink: "https://covid19-trac.netlify.app/",
      isBlog: false
    },
    {
      imgPath: weather,
      title: "Weather Forecast",
      description: "Location-based weather application providing current conditions.",
      ghLink: "https://github.com/Ravindra9555/CodeClauseInternship_Weather_app_using_api",
      demoLink: "https://code-clause-internship-weather-app-using-api.vercel.app/",
      isBlog: false
    },
    {
      imgPath: healthcare,
      title: "Healthcare Space",
      description: "Doctor discovery and appointment booking platform.",
      ghLink: "https://github.com/shyamjitripathi/Healthcare-Space/",
      demoLink: "https://shyamjitripathi.github.io/Healthcare-Space/",
      isBlog: false
    }
  ];

  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        
        {/* Industry Projects Section */}
        <div className="mb-5">
          <h2 className="mb-4">
            <FaBriefcase className="me-2" />
            Industry Projects
          </h2>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {industryProjects.map((project, index) => (
              <Col md={4} className="project-card" key={`industry-${index}`}>
                <ProjectCard
                  imgPath={project.imgPath}
                  isBlog={project.isBlog}
                  title={project.title}
                  description={project.description}
                  ghLink={project.ghLink}
                  demoLink={project.demoLink}
                />
              </Col>
            ))}
          </Row>
        </div>
        
        {/* Personal Projects Section */}
        <div>
          <h2 className="mb-4">
            <FaCode className="me-2" />
            Personal Projects
          </h2>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {personalProjects.map((project, index) => (
              <Col md={4} className="project-card" key={`personal-${index}`}>
                <ProjectCard
                  imgPath={project.imgPath}
                  isBlog={project.isBlog}
                  title={project.title}
                  description={project.description}
                  ghLink={project.ghLink}
                  demoLink={project.demoLink}
                />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </Container>
  );
}

export default Projects;