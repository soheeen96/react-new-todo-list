import React from "react";
import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "../atoms";

//prop 값 받기
function ToDo({ text, category, id }: IToDo) {
  // useSetRecoilState를 사용하여 아톰을 변경 시킬 수 있다.
  const setToDos = useSetRecoilState(toDoState);

  //클릭할 때 발생하는 이벤트 생성
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget);
    //클릭하면 button의 name의 값을 가져와서 어떤게 클릭됐는지 알게함
    const {
      currentTarget: { name },
    } = event;
    //oldToDos의 array가져오고
    //findIndex : 주어진 판별 함수를 만족하면 배열의 첫번째 요소의 인덱스 값을 반환
    //toDo의 id와 props에서 오는 id가 같은지 비교
    setToDos((oldToDos) => {
      const targetIdx = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };
      console.log(newToDo);
      return [
        ...oldToDos.slice(0, targetIdx), //클릭한 버튼의 인덱스 전까지 자름
        newToDo, //새 toDo넣기
        ...oldToDos.slice(targetIdx + 1), //클릭한 버튼의 인덱스 이후의 todo들
      ];
    });
  };
  return (
    <li>
      <div>
        <p>{text}</p>
        {category !== Categories.Doing && (
          <button name={Categories.Doing} onClick={onClick}>
            Doing
          </button>
        )}
        {category !== Categories.Todo && (
          <button name={Categories.Todo} onClick={onClick}>
            Todo
          </button>
        )}
        {category !== Categories.Done && (
          <button name={Categories.Done} onClick={onClick}>
            Done
          </button>
        )}
      </div>
    </li>
  );
}
export default ToDo;

/* 상위 컴포넌트에서 prop 값 받기 
   > function ToDo({prop 값}){ }
*/
