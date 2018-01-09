import React, { Component } from "react";
import { connect } from "react-redux";

class GridView extends Component {
  render() {
    return (
      <div>Test</div>
    );
  }
}

function mapStateToProps(state){
  return {
    photos: state.photos
  }
}

export default connect(mapStateToProps)(GridView);
