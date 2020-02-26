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
    this.state = {
      mode: 'read',
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
      // 기존에 있던 ReadContent를 _article이라는 변수에 줬음
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
      // 모드가 read 일 때도 ReadContent가 나오는건 마찬가지임
      _article = <ReadContent title={_title} desc={_desc} />
      // 모드가 Create 일때 createContent가 화면에 출력되게 할거임
    } else if(this.state.mode === 'create'){
      _article = <CreateContent />
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
        {/* <ReadContent title={_title} desc={_desc} /> 이 부분이 가변적으로 바뀔수 있게하기위해
          {_article} 이라는 변수로 처리 mode가 welcome이거나 read일 때는 ReadContent가 나옴 */}
        {_article}
      </div>
    );
  }
}

export default App;
