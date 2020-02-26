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
          // 체인지페이지 이벤트가 발생했을 때
          onChangePage={function(id){
            // this.setState를 이용해서 mode의 값과 함께 selected id의 값 0 이라고 되있는 부분에 해주면 됨
            this.setState({
              mode:'read',
              // 숫자열로 강제로 만들기 Number()
              selected_content_id:Number(id)
          });
          }.bind(this)}
         data={this.state.contents} />
        <Content title={_title} desc={_desc} />
      </div>
    );
  }
}

export default App;
