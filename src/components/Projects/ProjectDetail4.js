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
              <h1 style={{ fontSize:50, paddingBottom: 15 }}> <strong className="purple">Analyse de données via les techniques de visualisation< /strong> </h1>
            </Col>
          </Row>

          {/* Description du projet */}
          <Row>
            <Col md={12}>
              <p>Le jeu de données étudié concerne le placement des étudiants sur le campus universitaire. Il inclut des informations telles que le pourcentage et la spécialisation de l'enseignement secondaire, la spécialisation du diplôme, l'expérience de travail, et les offres de salaire pour les étudiants placés. L'objectif est de déterminer les critères de recrutement en effectuant une analyse de données à l'aide de techniques de visualisation sur le dataset. </p>
            </Col>
          </Row>

          {/* Outils utilisés */}
          <Row>
            <Col md={12} className="project-tools">

            <PDFViewer  lien="Rapport_Viz.pdf" />

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
