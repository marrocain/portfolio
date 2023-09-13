import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/unnamed.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Permettez-moi <span className="purple"> de me </span> présenter
            </h1>
            <p className="home-about-body">
              Mon aventure dans le domaine des données a commencé avec
              un coup de foudre instantané 🤷.‍
              <br />
              <br />Je suis un <b className="purple"> data scientist/engineer </b>  et <b className="purple"> développeur Python </b> avec une expertise en <b className="purple"> computer vision </b> ,
                 <b className="purple"> NLP </b> et ainsi qu'en <b className="purple">  Python</b>. J'ai également travaillé en tant que consultant <b className="purple">data engineer</b> ,
              en créant des <b className="purple"> dashboards </b>  et des applications pour le <b className="purple"> requêtage de données </b>.

              <br />
              <br />
              Mes compétences techniques couvrent
              <i>
                <b className="purple"> la manipulation de données, Deep Learning, Machine Learning et la visualisation des données.
                </b>
              </i>
              <br />
              <br />
              J'applique ma passion pour le développement avec des bibliothèques <b className="purple">JavaScript</b> comme <b className="purple">Vue.js</b>.


            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Trouvez-moi sur</h1>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ahmed-lafdhal-78b518199/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/lafdhal/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
