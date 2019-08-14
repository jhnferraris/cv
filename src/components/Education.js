import React from 'react';
import { Row, Col } from 'reactstrap';
import { educationalAttainment } from '../schema.json';
const Education = () => {
  return (
    <Row>
      <Col>
        <Row>
          <h3 style={{ paddingLeft: '15px', paddingBottom: '20px' }}>Education</h3>
        </Row>
        {educationalAttainment.map(item => {
          return (
            <Row className="education-block">
              <Col xs="9">
                <h5 className="degree">{item.degree}</h5>
              </Col>
              <Col className="school" xs="4">
                {item.school}
              </Col>
            </Row>
          );
        })}
      </Col>
    </Row>
  );
};
export default Education;
