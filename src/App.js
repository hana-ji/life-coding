import React, { Component } from 'react';
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import './App.css';


class App extends Component {
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
        {/* <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub} /> */}
        <header>
            <h1><a href="/" onClick={function(e){
              e.preventDefault();
              // setState를 사용해서 변한거를 리로드 시켜야함 this.state.mode = 'welcome';는 안됨
              this.setState({
                mode:'welcome'
              });
            //이벤트를 설치할 때 this를 찾을수 없어서 에러나면 함수가 끝난 직후에 
            // .bind(this)라고 적으면 됨 (this의 대상 지정해주는 함수)
            // (this)는 App이라는 component 자체를 가르키는 객체를 이 함수 안으로 주입해서 
            // 함수 안에서 this가 객체가 되게하는 역할을 함
            // render() 메서드 밖에서 화살표함수로 이벤트함수 만들어 넘겨주면 바인드 사용안해도 됨(니꼬 코드 참고)
            }.bind(this)}>{this.state.subject.title}</a></h1>
            {this.state.subject.sub}
        </header>
        <TOC data={this.state.contents} />
        <Content title={_title} desc={_desc} />
      </div>
    );
  }
}

export default App;
