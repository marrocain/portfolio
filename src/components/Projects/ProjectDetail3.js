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
              <h1 style={{ fontSize:50, paddingBottom: 15 }}> <strong className="purple">Re-identification des personnes en multivue < /strong> </h1>
            </Col>
          </Row>

          {/* Description du projet */}
          <Row>
            <Col md={12}>
              <p>Ce projet de recherche se concentre sur la re-identification des personnes en multivue, un domaine de pointe en vision par ordinateur. En utilisant des techniques de deep learning, j'explore la manière d'identifier les individus à partir de multiples vidéos de caméras différentes. Cette technologie a des implications essentielles pour la sécurité et la surveillance. Mon rapport détaille ma méthodologie, les résultats et les perspectives futures de cette recherche passionnante.</p>
            </Col>
          </Row>

          {/* Outils utilisés */}
          <Row>
            <Col md={12} className="project-tools">

            <PDFViewer  lien="TER M2.pdf" />

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
