import React from "react";
import { Container, Accordion, Image } from "react-bootstrap";

function Projects() {
  const projects = [
    { 
      title: "Haloihatec", 
      description: "This website functions for online training starting from registering, carrying out learning, taking exams, to downloading certificates.", 
      link: "https://haloihatec.com/",
      image: require("./images/lms.png")
    },
    { 
      title: "Fighting Game", 
      description: "1 vs 1 fight game created using canvas 2d javascript", 
      link: "https://game-gelut.vercel.app/",
      image: require("./images/game.png")
    },
    { 
      title: "Profile", 
      description: "Website containing personal data, projects and certificates.", 
      link: "https://hasan-profile.vercel.app/",
      image: require("./images/profile.png")
    },
  ];

  return (
    <Container className="my-5 d-flex justify-content-center">
      <div className="w-50">
        <h1 className="text-center">My Projects</h1>
        <p className="text-center">Here is a list of our recent projects:</p>
        <Accordion>
          {projects.map((project, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header>{project.title}</Accordion.Header>
              <Accordion.Body>
                <Image 
                  src={project.image} 
                  alt={`Image for ${project.title}`} 
                  fluid 
                  rounded 
                  className="mb-3" 
                />
                <p><strong>Link: </strong><a href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a></p>
                <p><strong>Description:</strong> {project.description}</p>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </Container>
  );
}

export default Projects;
