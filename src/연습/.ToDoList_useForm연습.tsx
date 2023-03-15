//강의2 react-hook-form 사용 강의4-9부터
import { useForm } from "react-hook-form";

interface IForm {
  email: string;
  password1: string;
  password2: string;
  name: string;
  nickname: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: { email: "@naver.com" },
  });
  const onSubmit = (data: IForm) => {
    if (data.password1 !== data.password2) {
      setError(
        "password2",
        { message: "비밀번호가 같지 않습니다" },
        { shouldFocus: true }
      );
    }
    //console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="이메일" {...register("email")} />
        <br />
        <input placeholder="비밀번호" {...register("password1")} />
        <br />
        <input placeholder="비밀번호 확인" {...register("password2")} />
        <span>{errors.password2?.message}</span>
        <br />
        <input placeholder="이름" {...register("name")} />
        <br />
        <input placeholder="닉네임" {...register("nickname")} />
        <br />
        <button>+</button>
      </form>
    </div>
  );
}
export default ToDoList;
/*
  - const { 호출할 함수1, 호출할 함수2, 등등  } = useForm();
  - 함수 종류 
  > register : name, onBlur, onChange, onClick, ref를 return하는 함수
   <input {...register("category") ...> 하면 register 함수가 반환하는 객체를 input의 props로 사용할 수 있음. <input onSubmit={} onClick={} onBlur={} > 같은 느낌..?
  > watch : input의 변화값을 관찰
  > handleSubmit : form 요소에서 발생하는 submit 이벤트를 처리
    <form onSubmit={handleSubmit(설정한 submit 함수)}>
  > formState : 현재 어떤 상태인지 속성을 가져옴 에러 유무 확인할 때 사용하는 듯?
  - defaultValues: { 설정한 name: "디폴트로 input 칸에 입력될 내용" }
  - setError : 하나 이상의 오류를 수동으로 설정할 수 있음
   > https://react-hook-form.com/api/useform/seterror 참고
   > setError함수에서 설정한 오류를 화면에 나타낼 수 있음 {errors.설정한 오류?.오류 종류}
 */
