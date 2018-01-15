import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import style from '../style';

class Layout extends Component {
  render() {
    return (
      <Nav bsStyle="tabs">
        <h1 style={style.header}>photobrowser</h1>
      </Nav>
    );
  }
}

export default Layout;
