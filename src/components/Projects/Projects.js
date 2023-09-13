import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import viz from "../../Assets/viz.jpeg";
import reid from "../../Assets/reid.png";
import loup from "../../Assets/loup.jpeg";
import carto from "../../Assets/carto.jpeg";
import abalone from "../../Assets/abamlone.jpeg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes  <strong className="purple">Travaux </strong> Récents
        </h1>
        <p style={{ color: "white" }}>
          Voici quelques projets que j'ai réalisés :
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={carto}
              isBlog={false}
              title="Cardiotocographie fœtale Avec du Machine learning"
              description="Explorer la possibilité d'utiliser des techniques d'apprentissage supervisé pour améliorer la précision et la rapidité du diagnostic médical des examens de cardiotocogrammes fœtaux."
              lien="/project1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={loup}
              isBlog={false}
              title="Jeu CasContact"
              description="Le jeu Cascontact est une version en ligne captivante inspirée du célèbre jeu de Loup-Garou. Réalisé avec Python pour le backend et Vue.js pour le frontend, il offre une expérience interactive en temps réel. Explorez ce monde mystérieux où l'intrigue règne en maître."
              lien="/project2"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reid}
              isBlog={false}
              title="Re-identification des personnes en multivue "
              description="Ce projet de recherche se concentre sur la re-identification des personnes en multivue, un domaine de pointe en vision par ordinateur. En utilisant des techniques de deep learning, j'explore la manière d'identifier les individus à partir de multiples vidéos de caméras différentes. Cette technologie a des implications essentielles pour la sécurité et la surveillance. Mon rapport détaille ma méthodologie, les résultats et les perspectives futures de cette recherche passionnante."
              lien="/project3"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={viz}
              isBlog={false}
              title="Analyse de données via les techniques de visualisation"
              description="Le jeu de données étudié concerne le placement des étudiants sur le campus universitaire. Il inclut des informations telles que le pourcentage et la spécialisation de l'enseignement secondaire, la spécialisation du diplôme, l'expérience de travail, et les offres de salaire pour les étudiants placés. L'objectif est de déterminer les critères de recrutement en effectuant une analyse de données à l'aide de techniques de visualisation sur le dataset."
              lien="/project4"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={abalone}
              isBlog={false}
              title="Modélisation Statistique de l'Âge des Abalones"
              description="Ce projet a impliqué l'exploration et l'analyse des données des abalones pour créer un modèle de prédiction d'âge précis. Après avoir nettoyé les données et évalué les corrélations entre les caractéristiques, une modélisation linéaire multiple et des transformations de données ont été utilisées pour développer un modèle statistique robuste de prédiction de l'âge des abalones."
              lien="/project5"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
