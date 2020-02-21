import React, { Component } from 'react';
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import './App.css';


class App extends Component {
  render() {
    return(
      <div className="App">
        <Subject title="WEB" sub="world wide web!" />
        <Subject title="hana" sub="지하나!" />
        <TOC />
        <Content title="HTML" desc="HTML is HyperTextMarkup Language." />
      </div>
    );
  }
}

export default App;
