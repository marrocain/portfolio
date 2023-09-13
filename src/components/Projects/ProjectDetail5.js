import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { pdfjs } from 'react-pdf';
import PDFViewer from './PDFViewer';


function ProjectDetail1() {

  return (
    <section>
      <Container fluid className="project-section">
        <Container>
          {/* Nom du projet */}
          <Row>
            <Col md={12} className="project-name">
              <h1 style={{ fontSize:50, paddingBottom: 15 }}> <strong className="purple">Modélisation Statistique de l'Âge des Abalones< /strong> </h1>
            </Col>
          </Row>

          {/* Description du projet */}
          <Row>
            <Col md={12}>
              <p>Ce projet a impliqué l'exploration et l'analyse des données des abalones pour créer un modèle de prédiction d'âge précis. Après avoir nettoyé les données et évalué les corrélations entre les caractéristiques, une modélisation linéaire multiple et des transformations de données ont été utilisées pour développer un modèle statistique robuste de prédiction de l'âge des abalones.</p>
            </Col>
          </Row>

          {/* Outils utilisés */}
          <Row>
            <Col md={12} className="project-tools">

            <PDFViewer  lien="projetstat.pdf" />

            </Col>
          </Row>

          {/* Images du projet */}
          <Row>
            <Col md={12} className="project-images">
              {/* Placez ici vos images du projet */}
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default ProjectDetail1;
