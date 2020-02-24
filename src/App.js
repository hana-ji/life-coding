import React, { Component } from 'react';
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    // 부모인 App의 입장에서는 state라는 내부정보 사용
    this.state = {
      subject: {title:"WEB", sub:"World Wide Web!" },
      contents: [
        {id:1, title:'HTML', desc:'HTML is information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }
  render() {
    return(
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub} />
        <Subject title="hana" sub="지하나!" />
        {/* 자식한테 전달할 때는 props로 사용*/}
        <TOC data={this.state.contents} />
        <Content title="HTML" desc="HTML is HyperTextMarkup Language." />
      </div>
    );
  }
}

export default App;
