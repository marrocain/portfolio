import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus ,RLogo} from "react-icons/cg";
import { SiR,SiC } from "react-icons/si";

import {
  DiScrum
} from "react-icons/di";


function Travail() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiScrum />
        <div className="text-inside-card" style={{ fontSize: '16px' }}>Agile</div>

      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiScrum />
        <div className="text-inside-card" style={{ fontSize: '16px' }}> SCRUM </div>

      </Col>

    </Row>
  );
}
export default Travail;
