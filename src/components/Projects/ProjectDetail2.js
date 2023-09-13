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
              <h1 style={{ fontSize:50, paddingBottom: 15 }}> <strong className="purple">Jeu CasContact< /strong> </h1>
            </Col>
          </Row>

          {/* Description du projet */}
          <Row>
            <Col md={12}>
              <p style={{textAlign:"center",fontSize:20}}>
                Le jeu Cascontact est une version en ligne captivante inspirée du célèbre jeu de Loup-Garou.
                Réalisé avec Python pour le backend et Vue.js pour le frontend, il offre une expérience interactive en temps réel.
                Explorez ce monde mystérieux où l'intrigue règne en maître

              </p>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <h1 style={{paddingTop:100}}>
                Voici le rapport pour plus de detail
              </h1>
            </Col>
          </Row>
          {/* Outils utilisés */}
          <Row>
            <Col md={12} className="project-tools">

            <PDFViewer  lien="rapport_cascontact.pdf" />

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
