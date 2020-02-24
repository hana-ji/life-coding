import React, { Component } from 'react';
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import './App.css';


class App extends Component {
  // 제일 먼저 로드되는 애라서 {}안에서 바꿔도 됨
  constructor(props){
    super(props);
    this.state = {
      mode: 'read',
      subject: {title:"WEB", sub:"World Wide Web!" },
      welcome:{title:'Welcome', desc:'Hello, React'},
      contents: [
        {id:1, title:'HTML', desc:'HTML is information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }
  render() {
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return(
      <div className="App">
        {/* 서브젝트라는 컴포넌트에 온체인지라는 이벤트를 만듦 
            이벤트에 함수를 설치함. 그 이벤트가 발생되었을 때(서브젝트 링크(WEB) 클릭 시)
            프롭스로 전달 된 onChange함수를 호출하면 끝 */}
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub} 
          // Subject라는 컴포넌트를 클릭했을 때 이벤트(onChangePage)에 설치한 함수를 호출하도록 만들려고한것
          // 누군가 WEB을 클릭했을 때 component 사용자가 설치한 함수를 호출만 하면 됨
          // onChangePage = () => {} 랑 아래랑 같음
          onChangePage={
            function(){
              this.setState({mode:'welcome'});
            }.bind(this)
          }
          />
        <TOC data={this.state.contents} />
        <Content title={_title} desc={_desc} />
      </div>
    );
  }
}

export default App;
