import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchAlbums } from '../actions/index';
import { fetchPhotos } from '../actions/index';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';


class Dropdown extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentDidMount(){
    this.props.fetchAlbums();
  }


  handleSubmit(event){
    event.preventDefault();
    this.props.fetchPhotos(this.currentAlbum.value);
  }


  render() {

    let albums = this.props.albums.map(album => {
      return (
        <option key={album.id}>{album.id}</option>
      );
    });

    return (
      <form>
        <FormGroup onChange={this.handleSubmit}>
          <ControlLabel>Select album to show</ControlLabel>
          <FormControl componentClass='select' defaultValue='Select' inputRef={input => this.currentAlbum = input}>
            <option>--</option>
            {albums}
          </FormControl>
        </FormGroup>

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
  return bindActionCreators({ fetchAlbums, fetchPhotos }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
