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
  SiHtml5,
  SiCss3,
  SiJavascript,



} from "react-icons/si";
import { RiVuejsFill } from "react-icons/ri";

function Web() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
        <div className="text-inside-card" style={{ fontSize: '16px' }}>HTML</div>

      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
        <div className="text-inside-card" style={{ fontSize: '16px' }}> Css </div>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript/>
        <div className="text-inside-card" style={{ fontSize: '16px' }}>JavaScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <RiVuejsFill/>
        <div className="text-inside-card" style={{ fontSize: '16px' }}>Vue.Js</div>
      </Col>
    </Row>
  );
}
export default Web;
