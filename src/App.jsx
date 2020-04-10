import React, { Component } from "react";
import { connect } from "react-redux";

class App extends Component {
  state = {
    message: "Cuadramiga"
  }

  render() {
    return (
    <>
      <h1> {this.props.state.message} </h1>
    </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state
  } 
}

export default connect(mapStateToProps)(App);
