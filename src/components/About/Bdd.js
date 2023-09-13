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
  SiMysql,
  SiSqlite,
  SiPostgresql


} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Bdd() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <div className="text-inside-card" style={{ fontSize: '16px' }}>Mysql</div>

      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiSqlite />
        <div className="text-inside-card" style={{ fontSize: '16px' }}> Sqlite </div>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql/>
        <div className="text-inside-card" style={{ fontSize: '16px' }}>Postgre sql</div>
      </Col>
    </Row>
  );
}
export default Bdd;
