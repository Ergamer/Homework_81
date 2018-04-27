import React, { Component } from 'react';
import './App.css';
import Shorter from "./components/Shorter/Shorter";
import {connect} from "react-redux";

class App extends Component {


  render() {
    return (
      <div className="App">
        <Shorter/>
          {this.props.links != '' ? <p>localhost:8000/{this.props.links}</p> : null}
      </div>
    );
  }
}
const mapStateToProps = state => {
    return {
        links: state.links
    }
};

export default connect (mapStateToProps)(App);
