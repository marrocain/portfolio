import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus ,RLogo} from "react-icons/cg";
import { SiR,SiC } from "react-icons/si";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiPowerbi,
  SiPlotly,
  SiTableau

} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function dataviz() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
        <div className="text-inside-card" style={{ fontSize: '16px' }}>Power BI</div>

      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPlotly />
        <div className="text-inside-card" style={{ fontSize: '16px' }}> Plotly </div>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTableau/>
        <div className="text-inside-card" style={{ fontSize: '16px' }}>Tableau</div>
      </Col>

      
    </Row>
  );
}
export default dataviz;
