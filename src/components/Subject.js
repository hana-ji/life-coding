import React, { Component } from 'react';

class Subject extends Component {
    render() {
        return(
        <header>
            {/* 실행됬을 때 첫번째 인자로 이벤트 객체가 전달 */}
            <h1><a href="/" onClick={function(e){
              e.preventDefault();
              // App.js에서 onChangePage 부분 함수불러옴
              this.props.onChangePage();
            }.bind(this)}>{this.props.title}</a></h1>
            {this.props.sub}
        </header>
        );
    }
}

export default Subject;