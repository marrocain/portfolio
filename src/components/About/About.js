import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Dataviz from "./Dataviz";
import Outils from "./Outils";
import Bdd from "./Bdd";
import Web from "./Web";
import Travail from "./Travail";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Qui  <strong className="purple">suis-je ?</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Langages de programmation
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Machine Learning & Deep Learning</strong>
        </h1>
        <Toolstack />

        <h1 className="project-heading">
          <strong className="purple">Data visualisation</strong>
        </h1>
        <Dataviz />


        <h1 className="project-heading">
          <strong className="purple">Outils et Logiciels </strong>
        </h1>
        <Outils />

        <h1 className="project-heading">
          <strong className="purple">Modélisation de base de données</strong>
        </h1>
        <Bdd />

        <h1 className="project-heading">
          <strong className="purple">Téchnologies web</strong>
        </h1>
        <Web />
        <h1 className="project-heading">
          <strong className="purple">Méthodologie de travail</strong>
        </h1>
        <Travail />


      </Container>
    </Container>
  );
}

export default About;
