import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import Header from './components/Header';
import Tech from './components/Tech';
import Education from './components/Education';
import Work from './components/Work';

class App extends Component {
  render() {
    return (
      <Container className="main">
        <Header />
        <hr />
        <Tech />
        <hr />
        <Row>
          <h3 style={{ paddingLeft: '15px', paddingBottom: '20px' }}>Work Experience</h3>
        </Row>
        <Work />
        <hr />
        <Education />
        <hr />
      </Container>
    );
  }
}

export default App;
