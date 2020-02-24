import React, { Component } from 'react';


class TOC extends Component {
render() {
    // list에 나타날 애들을 list라는 배열에 담을것
    var lists = [];
    // TOC가 내부적으로 갖고있는 값
    var data = this.props.data
    // 반복문
    var i = 0;
    // data의 길이만큼 반복 한다
    while(i < data.length){
        // 반복문이 실행될때마다 푸쉬 해줄 거임
        lists.push(<li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].title}</a></li>);
        // 반복 할때마다 i의 값은 i+1 이 된다.
        i = i +1;
    }
    return(
    <nav>
        <ul>
            {lists}
        </ul>
    </nav>
    );
}
}

export default TOC;