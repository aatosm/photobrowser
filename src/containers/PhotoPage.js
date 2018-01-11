import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPhoto } from '../actions/index';
import { Grid, Row, Col, Button } from 'react-bootstrap';


class PhotoPage extends Component {

  componentDidMount(){
    console.log(this.props.photo);
    const id = this.props.match.params.id;
    this.props.fetchPhoto(id);
  }

  render() {

    if(this.props.photo.id != this.props.match.params.id){
      return <div>Loading...</div>
    }

    return (
      <Grid>
        <Row>
          <Col>
            <h2>{this.props.photo.title}</h2>
            <img src={this.props.photo.url} />
          </Col>
        </Row>
        <Row>
          <Col>
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
