import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { fetchAlbums } from '../actions/index';

class Dropdown extends Component {

  componentDidMount(){
    this.props.fetchAlbums();
  }

  render() {

    let albums = this.props.albums.map(album => {
      return (
        <option>{album.id} - {album.title}</option>
      );
    });

    return (
      <form>
        <div className='form-group'>
          <label>Select album to show</label>
          <select className='form-control'>
            {albums}
          </select>
        </div>
      </form>
    );
  }

}

function mapStateToProps(state){
  return {
    albums: state.albums
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchAlbums }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
