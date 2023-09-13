import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour, je m'appelle  <span className="purple">Ahmed Lafdhal </span>
            et je suis ravi de vous accueillir sur cette page. <br /> Je suis récemment diplômé d'un master en Informatique parcours
            Intelligence Artificielle de <span className="purple">l'Université de Reims </span>  que j'ai obtenu en alternance chez Sogeti Capgemini.<br />
            <br />
            En parallèle, je suis le Président de l'Association AJEML depuis septembre 2022. Mon rôle inclut l'accueil des nouveaux arrivants à Lyon, l'aide aux étudiants pour leurs démarches administratives et l'organisation d'événements d'intégration.
            </p>


          <p style={{ color: "rgb(155 126 172)" }}>
            "Nul ne peut atteindre l'aube sans passer par le chemin de la nuit" {" "}
          </p>
          <footer className="blockquote-footer">Khalil Gibran</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
