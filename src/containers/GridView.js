import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { fetchPhotos } from '../actions/index';

class GridView extends Component {

  componentDidMount(){
    this.props.fetchPhotos();
  }

  render() {

    let photos = this.props.photos.map(photo => {
      return(
        <img src={photo.thumbnailUrl} />
      );
    });

    return (
      <div>{photos}</div>
    );
  }
}

function mapStateToProps(state){
  return {
    photos: state.photos
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchPhotos }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GridView);
