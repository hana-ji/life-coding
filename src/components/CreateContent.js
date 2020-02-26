import React, { Component } from 'react';

class CreateContent extends Component {
    render() {
        return(
        <article>
            <h2>Create</h2>
            <form action="/create_process" method="post"
            // 온서브밋 이벤트가 발생햇을 때 실행하도록 함
                onSubmit={function(e){
                    e.preventDefault();
                    // debugger; 로 경로 찾아서 해도되는데 찾기가 어려움 ㅜ
                    // CreateConente onSubmit이라는 프롭스 호출
                    this.props.onSubmit(
                        e.target.title.value,
                        e.target.desc.value
                    );
                }.bind(this)}
            >
                <p><input type="text" name="title" placeholder="title"></input></p>
                <p><textarea name="desc"placeholder="description"></textarea></p>
                <p><input type="submit"></input></p>
            </form>
        </article>
        );
    }
}

export default CreateContent;