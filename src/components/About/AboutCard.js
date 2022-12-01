import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi! I'm <span className="purple">Dave</span>, a Web{" "}
            <span className="purple">Developer/Programmer</span> with industry
            experience building market research web applications.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Studying new Technology Stacks
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "You must bend but you must never break!"{" "}
          </p>
          <footer className="blockquote-footer">MDM</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
