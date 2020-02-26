import React, { Component } from 'react';


class TOC extends Component {
render() {
    var lists = [];
    var data = this.props.data
    var i = 0;
    while(i < data.length){
        lists.push(
        <li key={data[i].id}>
          <a 
            href={"/content/"+data[i].id}
            data-id={data[i].id}
            // 이벤트를 실행 시킬때 e의
            onClick={function(e){
              // event 태그는 target 을 속성으로 가짐. 타겟은 이벤트가 발생한 태그 가르킴
              e.preventDefault();
              // 이 함수를 호출하는 코드에 인자로 넣어주기
              // e의 target의 dataset의 id를 추출
              this.props.onChangePage(e.target.dataset.id);
            }.bind(this)}
          >{data[i].title}</a>
        </li>);
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