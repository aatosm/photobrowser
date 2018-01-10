import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPhoto } from '../actions/index';


class PhotoPage extends Component {

  componentDidMount(){
    const id = this.props.match.params.id;
    this.props.fetchPhoto(id);
  }

  render() {
    return (
      <div>
        <h2>{this.props.photo.title}</h2>
        <img src={this.props.photo.url} />
        <Link to='/'>
          <button>
            Go back to pictures
          </button>
        </Link>
      </div>
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
