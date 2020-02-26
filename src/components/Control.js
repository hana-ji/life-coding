import React, { Component } from 'react';

class Control extends Component {
    render() {
        return(
        <ul>
            {/* 클릭했을 때 이벤트가 실행되서 온 체인지 모드 해서 나는 'create'야 라고 알려줌 */}
            <li><a href="/create" onClick={function(e){
                e.preventDefault();
                this.props.onChangeMode('create');
            }.bind(this)}>create</a></li>
            <li><a href="/update" onClick={function(e){
                e.preventDefault();
                this.props.onChangeMode('update');
            }.bind(this)}>update</a></li>
            {/* 페이지형식이 아니라 버튼 누르면 삭제 */}
            <li><input onClick={function(e){
                e.preventDefault();
                this.props.onChangeMode('delete');
            }.bind(this)} type="button" value="delete"></input></li>
        </ul>
        );
    }
}

export default Control;