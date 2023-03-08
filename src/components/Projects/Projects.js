import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import diet from "../../Assets/Projects/dietfriend.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import rate from "../../Assets/Projects/landing-rate.png";
import connect from "../../Assets/Projects/unit1-project.png";
import restful from "../../Assets/Projects/restful-rooms.png";

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
              imgPath={rate}
              isBlog={false}
              title="Rate My Closet"
              description="App that allows users to log in and upload photos and submit posts. I uitilized typescript and react.js for the front end and used postregsql for the backend database"
              ghLink="https://github.com/Kay7531/rate-my-closet-front-end"
              demoLink="https://rate-my-closet.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={restful}
              isBlog={false}
              title="restfulRooms"
              description="Platform for finding short-term accommodations for programmers who are traveling for work. Like Airbnb, it allows homeowners to rent out their spare rooms or entire homes to guests.This was a group project that required utilization of a git-hub workflow. We used MongoDB,  React.js Express, and Node.js"
              ghLink="https://github.com/izabela2279/restful-rooms-front-end"
              demoLink="https://restful-rooms.netlify.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={diet}
              isBlog={false}
              title="mydietfriend"
              description="myDietFriend is an app that allows you to take a charge of your health by allowing to visualize your quality of your meals and frequency of your workouts."
              ghLink="https://github.com/Kay7531/myDietFriend-health-tracker"
              demoLink="https://my-diet-friend.fly.dev/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={connect}
              isBlog={false}
              title="Connect the dance troopers"
              description="Using DOM manipulation I was able to create a connect four game with a fun stormtrooper theme. "
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

       
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
