import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

//localstorage 저장
const { persistAtom } = recoilPersist({
  key: "recoil-persist",
  storage: localStorage,
});

export enum Categories {
  "Todo" = "Todo",
  "Doing" = "Doing",
  "Done" = "Done",
}

export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}

//카테고리 상관없이 todo를 모두 저장
export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

//사용자가 현재 선택한 카테고리를 저장
export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.Todo,
});

//selector : 기존 state를 가져와서, 기존 state를 이용해 새로운 state를 만들어서 반환 > 기존 state 변형X 이용O
//selector를 이용해서 todo 카테고리 분류
export const toDoSelector = selector({
  key: "toDoSelector",
  //get function : 인자로 객체로 받음
  get: ({ get }) => {
    //todo를 모두 가져옴
    const toDos = get(toDoState);

    //모든 toDos에서 조건을 만족하는 todo만 골라내기(나머지는 버려짐)
    // return [
    //   toDos.filter((todo) => todo.category === "Todo"),
    //   toDos.filter((todo) => todo.category === "Doing"),
    //   toDos.filter((todo) => todo.category === "Done"),
    // ];

    //원하는 카테고리의 투두만 보이게 필터링하기
    const category = get(categoryState);
    return toDos.filter((todo) => todo.category === category);
  },
});

export const addCategoryState = atom<boolean>({
  key: "addCategory",
  default: false,
});

export const newCategoryState = atom<string[]>({
  key: "newCategory",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
