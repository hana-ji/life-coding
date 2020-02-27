import React, {Component} from 'react';

class UpdateContent extends Component {
    // 가변적 데이터, 스테이트 화
    constructor(props){
        super(props);
        this.state = {
            id:this.props.data.id,
            title:this.props.data.title,
            desc:this.props.data.desc
        }
        // 코드 뒤에 .bind(this)가 안이뻐서 아예 바인딩 된 애로 바꿔줌
        this.inputFormHandler = this.inputFormHandler.bind(this);
    }
    // onChange 하나하나 적기 귀찮
    inputFormHandler(e){
        // this.setState({title:e.target.value}); 이렇게 하면 title 부분만 적용됨
        // 최신문법으로 [e.target.name]
        this.setState({[e.target.name]:e.target.value});
    }
    render() {
        console.log(this.props.data);
        console.log('UpdateContent render');
        return (
            <article>
                <h2>Update</h2>
                <form
                    action="/create_process"
                    method="post"
                    onSubmit={function (e) {
                        e.preventDefault();
                        this.props.onSubmit(
                            this.state.id,
                            // e.target.title.value, 이렇게 였는데 변경
                            this.state.title,
                            // e.target.desc.value);
                            this.state.desc);
                    }.bind(this)}>
                    {/* 존재하지만 눈에 보이지x */}
                    <input type="hidden" name="id" value={this.state.id}></input>
                    <p>
                        <input 
                        type="text" 
                        name="title" 
                        placeholder="title"
                        // props의 데이터는 read.only임 수정x 그래서 리액트가 onChange 쓰라함
                        value={this.state.title}
                        onChange= {
                            // 수정하랴ㅕ할때마다 계속 다시 로드되는게 보임
                            // console.log(e.target.value);
                            this.inputFormHandler}
                        ></input>
                    </p>
                    <p>
                        <textarea 
                        name="desc" 
                        placeholder="description"
                        value={this.state.desc}
                        onChange= {this.inputFormHandler}
                        ></textarea>
                        

                    </p>
                    <p>
                        <input type="submit"></input>
                    </p>
                </form>
            </article>
        );
    }
}

export default UpdateContent;