import React, { Component } from 'react';
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import CreateContent from './components/CreateContent';
import Subject from "./components/Subject";
import Control from "./components/Control";
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    // = 3? 마지막 contents의 마지막 아이디와 같아야 함
    // state값으로 하지않고 객체값으로 한 이유 : 데이터추가(푸쉬) 할때 id값을 뭐로할까? 할때 사용하는 정보일 뿐이라서
    this.max_content_id = 3;
    this.state = {
      mode: 'create',
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
    var _title, _desc, _article = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc} />
    } else if(this.state.mode === 'read'){
      var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i]
        if(data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
      _article = <ReadContent title={_title} desc={_desc} />
    } else if(this.state.mode === 'create'){
      // submit 버튼이 클릭됬을 때 CreateContent의 이벤트로 설치된 함수를 실행
      _article = <CreateContent onSubmit={function(_title,_desc){
        // add content to this.state.contents
        // 위에 부분이 실행될 때 마다 기존에 아이디 값 + 1 증가
        this.max_content_id = this.max_content_id + 1;
        // this.state.contents.push(
        //   {id:this.max_content_id, title:_title, desc:_desc}
        //   ); < 오리지널 데이터를 바꿈 나중에 개선할때 까다로움
        // _contents = concat의 리턴값 (데이터 추가된 값)
        var _contents = this.state.contents.concat(
          {id:this.max_content_id, title:_title, desc:_desc}
        );
        // 기존에 가지고있던 값이 새롭게 만들어진 데이터로 교체됨
        this.setState({
          contents:_contents
        });
        // console.log(_title, _desc) 로 title과 desc 값 얻은거 확인
      }.bind(this)}/>
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
         data={this.state.contents} />
        <Control onChangeMode={function(_mode){
          this.setState({
            mode:_mode
          });
        }.bind(this)} />
        {_article}
      </div>
    );
  }
}

export default App;
