import React, { Component } from "react";
import { connect } from "react-redux";

class GridView extends Component {

  render() {

    console.log(this.props.photos);

    let photos = this.props.photos.map(photo => {
      return(
        <img key={photo.id} src={photo.thumbnailUrl} />
      );
    });

    if(this.props.photos.length === 0){
      return (
        <h4>Load pictures by selecting an album!</h4>
      );
    }

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

export default connect(mapStateToProps)(GridView);
