import React, { Component } from 'react';
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import './App.css';


class App extends Component {
  // 클래스형 컴포넌트에서 프롭스 쓸 때 필요한 애 (state 값 초기화함)
  // 컴포넌트가 실행될 때 constructor가 있으면 걔가 제일 먼저 실행되서 초기화를 담당함
  constructor(props){
    super(props);
    // 스테이트값 초기화
    this.state = {
      // subject(property)의 값을 다시 객체로 줌 (state화 할것)
      subject: {title:"WEB",sub:"World Wide Web!" }
    }
  }
  render() {
    return(
      <div className="App">
        {/* "사이에 쓰면 문자열", {사이에 쓰면 자바스크립트 코드} */}
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub} />
        <Subject title="hana" sub="지하나!" />
        <TOC />
        <Content title="HTML" desc="HTML is HyperTextMarkup Language." />
      </div>
    );
  }
}

/* App이 내부적으로 사용할 상태 = state 형태
   상위coponent(App)의 state값(this.state ={subject: {title:"WEB"}})을 
   하위 컴포넌트(Subject)의 props의 값(title={this.state.subject.title})으로 전달하는것은 
   얼마든지 가능하다 */

export default App;
