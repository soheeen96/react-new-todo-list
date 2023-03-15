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
  //category: Categories;
  category: string;
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.Todo,
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

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((todo) => todo.category === category);
  },
});
