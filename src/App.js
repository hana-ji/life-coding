import React, { Component } from 'react';
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
import Subject from "./components/Subject";
import Control from "./components/Control";
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: 'welcome',
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
  getReadContent(){
    var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i]
        if(data.id === this.state.selected_content_id) {
          return data;
          break;
        }
        i = i + 1;
      }
  }
  // 함수로 만들면서 랜더는 슬림해짐
  getContent(){
    var _title, _desc, _article = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc} />
    } else if(this.state.mode === 'read'){
      // 깔끔하게 리펙토링함
      var _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc} />
    } else if(this.state.mode === 'create'){
      _article = <CreateContent onSubmit={function(_title,_desc){
        this.max_content_id = this.max_content_id + 1;
        // var _contents = this.state.contents.concat(
        //   {id:this.max_content_id, title:_title, desc:_desc}
        // ); 이 방법과 복제해서 하는 방법으로 배열 추가할수있음
        var _contents = Array.from(this.state.contents);
        // 복제했으니까 푸쉬편하게 사용해도 상관없음
        _contents.push({id:this.max_content_id, title:_title, desc:_desc});
        this.setState({
          contents:_contents,
          // 모드바꾸고 selected_content_id를 지금 추가한 것으로 바꿔주면 상세보기로 바로 보여줌
          mode:'read',
          selected_content_id: this.max_content_id
        });
      }.bind(this)}/>
    } else if(this.state.mode === 'update'){
      _content = this.getReadContent();
      // _content라고 하는 값을 data로 주입
      _article = <UpdateContent data={_content} onSubmit={
        function(_id, _title, _desc){
          // this.state.contents를 복사한 새로운 배열이 만들어짐(성능 튜닝할때 사용 (불변함))
          var _contents = Array.from(this.state.contents);
          // _contents안에있는 원소들을 뒤져서 id값이 우리가 수정하고자하는 것과 같은 원소 찾기
          var i = 0;
          while(i < _contents.length){
            if(_contents[i].id === _id) {
              _contents[i] = {id:_id, title:_title, desc:_desc};
              break;
            }
            i = i + 1;
          }
          // 수정 후 수정한 내용으로 상세보기 까지 = mode만 바꾸면 됨
          // 업데이트가 끝난 후
          this.setState({
            contents:_contents,
            // 모드만 바꿔주면 상세보기도 가능
            mode:'read'
          });
      }.bind(this)}/>
    }
    return _article;
  }
  render() {
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
          // _mode값이 delete 면 삭제가 시작
          if(_mode === 'delete'){
            // 정말로 삭제할거냐고 물어봄 window.confirm() (윈도우는 꼭 같이 써줘야함)
            // 확인 누르면 true, 캔슬 누르면 false
            if(window.confirm('really?')){
              // 1.누구를 통해 삭제할 것인가? = selected_content_id
              // 2.어디에있는 데이터를 삭제할 것인가? = contents
              var _contents = Array.from(this.state.contents);
              // ㄴ 나중에 setState때도 사용할거라 복제해놓음
              var i = 0;
              while(i < _contents.length){
                if(_contents[i].id === this.state.selected_content_id){
                  // 어디서부터 어디까지를 지울 것인가(발견한 id 값부터 1개를 지우겠다)
                  _contents.splice(i,1);
                  // 값 바꿨으므로 순회 끝
                  break;
                }
                i = i + 1;
              }
              this.setState({
                // 삭제가 잘 됬다면 모드를 read로 바꿔줌
                mode:'welcome',
                contents:_contents
              });
              // 삭제됬다고 알림
              alert('deleted!');
            }
            // _mode값이 !== delete 면 페이지 전환만  해주면 됨
          } else {
            this.setState({
              mode:_mode
            });
          }
        }.bind(this)} />
        {this.getContent()}
      </div>
    );
  }
}

export default App;
