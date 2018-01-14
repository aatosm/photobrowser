import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPhoto } from '../actions/index';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import style from '../style';

import Layout from '../components/Layout';


class PhotoPage extends Component {

  componentDidMount(){
    const id = this.props.match.params.id;
    this.props.fetchPhoto(id);
  }

  render() {

    if(this.props.photo.id != this.props.match.params.id){
      return (
        <Grid>
          <Row>
            <Col md={12}>
              <Layout />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <p>Loading image...</p>
            </Col>
          </Row>
        </Grid>
      );
    }

    return (
      <Grid>
        <Row>
          <Col md={12}>
            <Layout />
          </Col>
        </Row>
        <Row>
          <Col md={12} style={style.photo}>
            <h3 style={style.photoTitle}>{this.props.photo.title}</h3>
            <img src={this.props.photo.url} />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Link to='/'>
              <Button bsStyle="danger">Go back</Button>
            </Link>
          </Col>
        </Row>
      </Grid>
    );
  }
}


function mapStateToProps(state){
  return {
    photo: state.photo
  }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchPhoto }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(PhotoPage);
