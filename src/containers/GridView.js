import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class GridView extends Component {

  render() {
    //<Link key={photo.id} to={`/photos/${photo.id}`}>
    let photos = this.props.photos.map(photo => {
      return(
        <Link key={photo.id} to={`/photos/${photo.id}`}>
          <img key={photo.id} src={photo.thumbnailUrl} />
        </Link>
      );
    });

    if(this.props.photos.length === 0){
      return (
        <h4>Load pictures by selecting an album!</h4>
      );
    }

    return (
      <div>
        {photos}
      </div>
    );

  }
}


function mapStateToProps(state){
  return {
    photos: state.photos
  }
}


export default connect(mapStateToProps)(GridView);
