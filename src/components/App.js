import React, { Component } from 'react';
import GridView from '../containers/GridView';
import Dropdown from '../containers/Dropdown';
import Layout from './Layout';
import { Grid, Row, Col } from 'react-bootstrap';
import style from '../style';

class App extends Component {
  render() {
    return (
      <Grid style={style.background}>
        <Row>
          <Col md={12}>
            <Layout />
          </Col>
        </Row>
        <Row>
          <Col md={4}>
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
