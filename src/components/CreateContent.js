import React, { Component } from 'react';

class CreateContent extends Component {
    render() {
        return(
        <article>
            <h2>Create</h2>
            <form action="/create_process" method="post"
            // 서브밋 버튼을 클릭했을 때 서브밋 버튼을 포함하고 있는 폼 태그에 온서브밋이라는 이벤트를 설치하면 그 이벤트가 실행됨
                onSubmit={function(e){
                    e.preventDefault();
                    alert("Submit!!!!");
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