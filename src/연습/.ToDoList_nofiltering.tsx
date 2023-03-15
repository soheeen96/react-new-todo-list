import { useRecoilValue } from "recoil";
import { toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

interface IForm {
  toDo: string;
}

function ToDoList() {
  //컴포넌트 분리전
  //const [toDos, setToDos] = useRecoilState(toDoState);

  //컴포넌트 분리 후 setToDos 사용 안함 = 상태값 읽기만 한다는 뜻 >> useRecoilValue 훅 사용
  const toDos = useRecoilValue(toDoState);
  console.log(toDos);

  //모든 카테고리 다 보이게
  //const [toDo, doing, done] = useRecoilValue(toDoSelector);

  return {
    /*<div>
       <CreateToDo />
      <hr />
      <h2>Todo</h2>
      <ul>
        {toDo.map(
          (
            toDo //selector에서 filtering한걸 사용함
          ) => (
            <ToDo key={toDo.id} {...toDo} />
            //toDos 배열의 toDo원소 하나하나가 ToDo컴포넌트에 필요한 props랑 같은 모양이기 때문 >> ToDo컴포넌트에 필요한 prop이 IToDo interface 임
            // text={toDo.text} id={toDo.id} category={toDo.category}
            // >> text, id, category의 prop을 전달해줌
          )
        )}
      </ul>
      <hr />
      <h2>Doing</h2>
      <ul>
        {doing.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
      <h2>Done</h2>
      <ul>
        {done.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul> 
    </div>*/
  };
}
export default ToDoList;
