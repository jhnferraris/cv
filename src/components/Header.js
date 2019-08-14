import React from 'react';
import { Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import { primaryInfo } from '../schema.json';
const Header = () => {
  return (
    <Row className="header">
      <Col>
        <h1>John Michael Ferraris</h1>
        <div className="subheader-title" style={{ color: 'grey' }}>
          {new Date().getFullYear() - 2013} years in the industry | Scrum Agile Practitioner
        </div>
        <div>
          <a href={`mailto:${primaryInfo.email}`}>
            <FontAwesomeIcon icon={faEnvelope} className="email-link" />
          </a>
          <a href={primaryInfo.githubUrl} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="github-link" />
          </a>
          <a href={primaryInfo.linkedInUrl} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} className="linkedin-link" />
          </a>
        </div>
      </Col>
    </Row>
  );
};

export default Header;
