//강의2 react-hook-form 사용
import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";
import { toDoState } from "../atoms";

interface IForm {
  toDo: string;
}

//atom.tsx 파일로 옮김
// interface IToDo {
//   text: string;
//   id: number;
//   category: "Todo" | "Doing" | "Done";
// }

//useRecoilState의 쓰일 atom ==> atom.tsx 파일로 옮김
// const toDoState = atom<IToDo[]>({
//   key: "toDo",
//   default: [],
// });

function ToDoList() {
  // useState 처럼 초기값 설정해주는데, atom 설정해서 식별할 key값과 기본값(타입)을 설정
  const [toDos, setToDos] = useRecoilState(toDoState); //atom 설정해줘야함
  const { register, handleSubmit, setValue } = useForm<IForm>();

  //date > 키값인 toDo로 바꾸고 IForm의 타입을 가짐
  const handleValid = ({ toDo }: IForm) => {
    //toDo값을 업데이트할 함수 설정
    //oldToDos는 기본값? 업데이트 이전 값으로 임의로 이름 설정함
    // toDoState의 디폴트값이 배열[]이라 []로 설정
    // 업데이트 될 [] 배열 안에 IToDo의 타입값을 모두 정리 고유ID는 Date.now()로 설정
    // 업데이트된 [] 앞이나 뒤에 업데이트 이전값(임의로 이름 설정한 oldToDos)를 두면 업데이트된 값과 이전값이 모두 return됨
    // setToDos((oldToDos) => [
    //   { text: toDo, id: Date.now(), category: "Todo" },
    //   ...oldToDos,
    // ]);
    setValue("toDo", ""); //state 업데이트 및 초기값
  };
  return {
    /* <div>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          placeholder="할 일을 적어보세요"
          {...register("toDo", {
            required: true,
          })}
        />
        <button>+</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>{toDo.text}</li>
        ))}
      </ul>
    </div> */
  };
}
export default ToDoList;
/*
- setValue : state 값 업데이트해주면서 불필요한 rendering 피함
 > setValue(이름, 초기값);
 > onClick={() => setValue("이름", "값")}
- reset : 전체 form state 또는 form state의 일부를 재설정
 > reset() : form 전체 리셋
 > reset({ 필드: "" }) : form에서 특정 필드만 리셋
 */

/*
 - map() 반복문, 배열 컴포넌트
  > .map((key) => (
    
  ))
 */

/*
useRecoilState : atom 또는 selector 값을 읽고 쓸 때 사용. useState랑 비슷한데 기본값 대신 recoil 상태를 가져옴
 */
