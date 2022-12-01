import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Omnifood from "../../Assets/Projects/omnifood.png";
import TimeKeeper from "../../Assets/Projects/timekeeper.png";
import CockTails from "../../Assets/Projects/cocktails.png";
import Marites from "../../Assets/Projects/marites.PNG";
import Hacker from "../../Assets/Projects/hacker.png";
import Youtube from "../../Assets/Projects/yt.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Omnifood}
              isBlog={false}
              title="Omnifood"
              description="Home page for a mobile App named omnifood: A healthy meal delivered to your door, every single day
The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tastes and nutritional needs. This is a capstone project from Jonathan Schedtmann"
              ghLink="https://github.com/davemarquez20/omnifood"
              demoLink="https://emdee-omnifood.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TimeKeeper}
              isBlog={false}
              title="M3C Time Keeper App"
              description="An application used by the human resource team to manage attendance for payroll purposes. This will allow employees to keep track of their attendance on the fly and apply leaves etc. This was created using React JS and Googles Firebase. Source code and Demo not available since it's a propriety software."
              ghLink="https://github.com/davemarquez20"
              demoLink="https://github.com/davemarquez20"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CockTails}
              isBlog={false}
              title="The Cocktail DB"
              description="A React JS application used for searching cocktail drinks and its ingredients using the thecocktaildb API. It uses the Context API from React."
              ghLink="https://github.com/davemarquez20/cocktail-project"
              demoLink="https://sage-semifreddo-827954.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Marites}
              isBlog={false}
              title="M.A.R.S Online Social Media"
              description="A social media similar to twitter created using React JS and Node JS"
              ghLink="https://github.com/davemarquez20/mars-frontend"
              demoLink="https://deft-semifreddo-906c79.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Hacker}
              isBlog={false}
              title="Hacker News Website"
              description="A website that will pull out the news from different technology related news websites base from the users query. It will allow the users to read more info about the news when a card has been clicked and allows users to remove a particular news base from preference."
              ghLink="https://github.com/davemarquez20/hacker-news-project"
              demoLink="https://wondrous-tapioca-921bb5.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Youtube}
              isBlog={false}
              title="Youtube Video Search"
              description="An application created using React JS that will allow the users to search video from youtube using  the Youtube API."
              ghLink="https://github.com/davemarquez20/yt-app"
              demoLink="https://lucent-peony-cdd8fd.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
