import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import style from '../style';
import { Image } from 'react-bootstrap';

class GridView extends Component {

  render() {

    let photos = this.props.photos.map(photo => {
      return(
        <div key={photo.id}>
          <Link to={`/photos/${photo.id}`}>
            <Image src={photo.thumbnailUrl} rounded />
          </Link>
        </div>
      );
    });

    if(this.props.photos.length === 0){
      return (
        <h4>Load pictures by selecting an album!</h4>
      );
    }

    return (
      <div style={style.divStyle}>
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
