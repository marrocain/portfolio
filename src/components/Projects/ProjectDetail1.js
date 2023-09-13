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
              <h1 style={{ fontSize:50, paddingBottom: 15 }}> <strong className="purple">Cardiotocographie fœtale Avec du Machine learning< /strong> </h1>
            </Col>
          </Row>

          {/* Description du projet */}
          <Row>
            <Col md={12}>
              <p>L'objectif de cette étude est d'explorer la possibilité d'utiliser des techniques d'apprentissage supervisé pour améliorer la précision et la rapidité du diagnostic médical des examens de cardiotocogrammes fœtaux. Le projet vise à déterminer si ces techniques peuvent aider à classifier les examens en fonction de leur état de santé de manière plus efficace que les méthodes traditionnelles basées sur l'expertise humaine.</p>
            </Col>
          </Row>

          {/* Outils utilisés */}
          <Row>
            <Col md={12} className="project-tools">

            <PDFViewer  lien="RAPPORT_INFO901.pdf" />

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
