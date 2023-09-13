import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiTensorflow,
  SiPytorch,
  SiKeras,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
} from "react-icons/si";

import {
  BrainCircuit
} from "lucide-react";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
        <div className="text-inside-card" style={{ fontSize: '16px' }}>Tensorflow</div>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
        <div className="text-inside-card" style={{ fontSize: '16px' }}>Pytroch</div>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKeras />
        <div className="text-inside-card" style={{ fontSize: '16px' }}>Keras</div>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
        <div className="text-inside-card" style={{ fontSize: '16px' }}>Pandas</div>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
        <div className="text-inside-card" style={{ fontSize: '16px' }}>Numpy</div>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn />
        <div className="text-inside-card" style={{ fontSize: '16px' }}>Sickit-Learn</div>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BrainCircuit />
        <div className="text-inside-card" style={{ fontSize: '16px' }}>ANN</div>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BrainCircuit />
        <div className="text-inside-card" style={{ fontSize: '16px' }}>RNN</div>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BrainCircuit />
        <div className="text-inside-card" style={{ fontSize: '16px' }}>LSTM</div>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BrainCircuit />
        <div className="text-inside-card" style={{ fontSize: '16px' }}>CNN</div>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BrainCircuit />
        <div className="text-inside-card" style={{ fontSize: '16px' }}>GAN</div>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BrainCircuit />
        <div className="text-inside-card" style={{ fontSize: '16px' }}>ANN</div>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BrainCircuit />
        <div className="text-inside-card" style={{ fontSize: '16px' }}>NLP</div>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BrainCircuit />
        <div className="text-inside-card" style={{ fontSize: '16px' }}>Computer vision</div>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BrainCircuit />
        <div className="text-inside-card" style={{ fontSize: '16px' }}>Clustering</div>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BrainCircuit />
        <div className="text-inside-card" style={{ fontSize: '16px' }}>Classification</div>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BrainCircuit />
        <div className="text-inside-card" style={{ fontSize: '16px' }}>Régression</div>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BrainCircuit />
        <div className="text-inside-card" style={{ fontSize: '16px' }}>Séries temporelles</div>

      </Col>
    </Row>
  );
}

export default Toolstack;
