import React from 'react';
import { Row, Col } from 'reactstrap';
import { Doughnut } from 'react-chartjs-2';

const Tech = () => {
  return (
    <div>
      <Row>
        <Col md="4">
          <h3 className="tech-header">Programming Languages</h3>
          <Doughnut
            data={{
              labels: ['JavaScript', 'PHP', 'Go', 'Python'],
              datasets: [
                {
                  data: [60, 20, 3, 5],
                  backgroundColor: ['#007800', '#637b80', '#f47f42', '#2faee0']
                }
              ]
            }}
            legend={{
              position: 'bottom'
            }}
          />
        </Col>
        <Col md="4">
          <h3 className="tech-header">JavaScript Stack</h3>
          <Doughnut
            data={{
              labels: ['Node.JS', 'ExpressJS', 'ReactJS', 'Sails.JS'],
              datasets: [
                {
                  data: [35, 20, 30, 15],
                  backgroundColor: ['#77a3f9', '#007800', '#637b80', '#f47f42']
                }
              ]
            }}
          />
        </Col>
        <Col md="4">
          <h3 className="tech-header">Other technologies</h3>
          <Doughnut
            data={{
              labels: ['REST', 'GraphQL', 'Database (PostgreSQL, MySQL)', 'Bots (Lex/Alexa)', 'DevOps'],
              datasets: [
                {
                  data: [60, 30, 50, 15, 5],
                  backgroundColor: ['#007800', '#777c26', '#637b80', '#f47f42', '#434745']
                }
              ]
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col md={{ size: 4, offset: 4 }}>
          <h3 className="tech-header">Business</h3>
          <Doughnut
            data={{
              labels: ['SDLC Management', 'Scrum (Agile)', 'Kanban (Agile)', 'Finance, Operations, HR'],
              datasets: [
                {
                  data: [70, 60, 20, 10],
                  backgroundColor: ['#007800', '#637b80', '#f47f42', '#434745']
                }
              ]
            }}
          />
        </Col>
      </Row>
    </div>
  );
};
export default Tech;
