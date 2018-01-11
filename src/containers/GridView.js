import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import style from '../style';

class GridView extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentAlbumId: null
    }
    this.updateCurrent = this.updateCurrent.bind(this);
  }

  updateCurrent(){
    
  }

  render() {

    let photos = this.props.photos.map(photo => {
      return(
        <Link key={photo.id} to={`/photos/${photo.id}`}>
          <img src={photo.thumbnailUrl} />
        </Link>
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
