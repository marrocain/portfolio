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
  SiDocker,
  SiGit,
  SiQt


} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Outils() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
        <div className="text-inside-card" style={{ fontSize: '16px' }}>Docker</div>

      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
        <div className="text-inside-card" style={{ fontSize: '16px' }}> GIT </div>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiQt/>
        <div className="text-inside-card" style={{ fontSize: '16px' }}>QT</div>
      </Col>
    </Row>
  );
}
export default Outils;
