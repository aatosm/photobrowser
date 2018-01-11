import React, { Component } from 'react';
import GridView from '../containers/GridView';
import Dropdown from '../containers/Dropdown';
import { Grid, Row, Col } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={2}>
            <Dropdown />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <GridView />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
