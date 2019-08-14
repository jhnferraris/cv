import React from 'react';
import { Row, Col, Card, CardHeader, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { workExperience } from '../schema.json';
const Work = () => {
  return (
    <Row>
      {workExperience.map(exp => {
        return (
          <Col md="12" className="calling-card">
            <Card className="d-flex">
              <CardHeader>
                <h4>{exp.company}</h4>
              </CardHeader>
              <CardBody>
                <CardTitle className="position">{exp.role}</CardTitle>
                <CardSubtitle className="work-time">{exp.timeline}</CardSubtitle>
              </CardBody>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default Work;
