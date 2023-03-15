// 강의1 useState 사용해서 input 값 콘솔에 찍어보기
import React, { useState } from "react";

function ToDoList() {
  const [toDo, setToDo] = useState(""); //useState("") -> type이 string 이라고 설정함

  //input을 state로 관리하고 onChange 이벤트로 계속 업데이트 해주는 중
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    //인수로 설정한 event의 currentTarget 내부의 value를 가져올거임
    const {
      currentTarget: { value },
    } = event;
    setToDo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(toDo);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="text"
          value={toDo}
          placeholder="투두리스트를 적어보세요"
        />
        <button>+</button>
      </form>
    </div>
  );
}
export default ToDoList;
/*
- state : 동적인 값
- useState : 컴포넌트에서 상태 관리
- const [상태 값을 저장할 변수, 해당 상태 값을 새로고침할 함수 ] = useState(상태 초기값 설정);
- <input type="text" ``value={toDo}`` placeholder="투두리스트를 적어보세요" /> 
>> value={상태 값을 저장할 변수 = useState에서 선언한 toDo 사용}

- form에다가 onSubmit={onSubmit} 이벤트 주는 이유 :form 내부에 button의 기본 type이 submit이라 버튼 클릭하면 onSubmit 이벤트가 발생함. 만약 button의 type이 submit이 아니고 reset이나 다른거면 이벤트 작동 안됨

*/
