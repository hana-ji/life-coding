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
      // 기본으로 2번 컨텐트가 선택되게 함
      selected_content_id:2,
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
      var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i]
        if(data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          // 강제로 와일 문 끝냄/ 사용 시 조건문 끝나고 조건문 바깥 쪽이 실행됨
          break;
        }
        i = i + 1;
      }

    }
    return(
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub} 
          onChangePage={
            function(){
              this.setState({mode:'welcome'});
            }.bind(this)
          }
          />
        <TOC 
          onChangePage={function(id){
            this.setState({
              mode:'read',
              selected_content_id:Number(id)
          });
          }.bind(this)}
          // App이라는 상위 컴포넌트가 TOC라는 하위 컴포넌트에 데이터 라는 프롭스로 값을 전달
          // TOC를 클릭했을 때 App의 값을 바꾸려면 이벤트를 구현해서 실행됬을 때 상위 state값을 호출해서 바꿀 수 있다.
         data={this.state.contents} />
        <Content title={_title} desc={_desc} />
      </div>
    );
  }
}

export default App;
