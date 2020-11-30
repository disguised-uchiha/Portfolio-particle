import './Aboutme.css';
import React from 'react';
import 'devicon';
import { Container, Row, Col } from 'react-bootstrap';

function Aboutme(props) {
  return (
    <div className="aboutme" id="about-me">
      <h1 style={{ textAlign: 'center' }} className="pt-5 pb-3">
        {' '}
        ABOUT ME
      </h1>

      <Container>
        <Row className="justify-content-center">
          <p className="aboutme-para text-center">
            I'm a Full-Stack Developer <i className="devicon-react-original colored"></i>
            <br />I turn coffee into code, use tabs over spaces and never broke production.
          </p>
        </Row>
        <Row>
          <Col sm={12} md={4} className="d-flex flex-column align-items-center">
            <h3>Design</h3>
            <div className="d-flex w-100 px-4 justify-content-between" style={{ fontSize: '4rem' }}>
              <i className="devicon-html5-plain-wordmark colored"></i>
              <i className="devicon-sass-original colored"></i>
              <i className="devicon-bootstrap-plain-wordmark colored"></i>
            </div>
            <p className="aboutme-para">
              I can design websites in figma and can covert any design to actual working website using technologies like HTML, CSS, JS and some
              frameworks.
            </p>
          </Col>
          <Col sm={12} md={4} className="d-flex flex-column align-items-center">
            <h3>Code</h3>
            <div className="d-flex w-100 px-4 justify-content-between px-2 flex-wrap" style={{ fontSize: '4rem' }}>
              <i className="devicon-react-original-wordmark colored"></i>
              <i className="devicon-nodejs-plain-wordmark colored"></i>
              <i className="devicon-javascript-plain colored"></i>
            </div>
            <p className="aboutme-para">
              I am a Full-Stack ReactJS developer who believes in writing neat and elegant code following DRY principle. Along with JavaScript, I can
              also code in Python & Dart;
            </p>
          </Col>
          <Col sm={12} md={4} className="d-flex flex-column align-items-center">
            <h3>Tools</h3>
            <div className="d-flex w-100 px-4 justify-content-between" style={{ fontSize: '4rem' }}>
              <i className="devicon-visualstudio-plain"></i> <i className="devicon-git-plain-wordmark colored"></i>
              <i className="devicon-github-plain-wordmark colored"></i>
            </div>
            <p className="aboutme-para">
              I use tools like git, github for versioning and collaboration along with powerful editors like VSCode, Sublime & Vim.
            </p>
          </Col>
        </Row>
      </Container>
      <br />
    </div>
  );
}

export default Aboutme;
