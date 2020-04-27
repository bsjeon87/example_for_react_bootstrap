import React, {Component} from 'react';

import { firestore } from "./firebase/firebase";

//
//화살표 함수 표현(arrow function expression)은 function 표현에
//비해 구문이 짧고  자신의 this, arguments, super 또는 new.target을
// 바인딩 하지 않습니다.
//화살표 함수는 항상 익명입니다.
//이  함수 표현은 메소드 함수가 아닌 곳에 가장 적합합니다. 그래서 생성자로서 사용할 수 없습니다.
// 함수 표현식
//function () {}
// 화살표 함수 표현식
//() => {}


export class Home extends Component {
  state = {
    tasks: []
  }
  componentDidMount(){
    const tasks = [...this.state.tasks];
     firestore.collection('tasks').get()
     .then(docs=>{
       docs.forEach(doc=>{
         console.log(doc.data().todo+ " " + doc.id);
         tasks.push( { todo: doc.data().todo, id: doc.id});
         this.setState({tasks});
       })
     });
  }
  render(){
    const tasks = [...this.state.tasks];
    return (
      <div>
        <h2>Home Home2</h2>
        {
          tasks.map( (task, index) =>(
              <h3 key={index}>{task.todo}</h3>
           ))
         }
      </div>
    );
  }
}


//export {Home};
