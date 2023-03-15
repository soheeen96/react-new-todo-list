import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState, newCategoryState, toDoSelector } from "../atoms";
import Category from "./Category";
import CreateToDo from "./CreateToDo";
import NewCategory from "./NewCategory";
import ToDo from "./ToDo";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [newCategory, setNewCategory] = useRecoilState(newCategoryState);
  return (
    <div>
      <Category />
      <NewCategory />
      <hr />
      <CreateToDo />
      <hr />
      {toDos.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} newCategory={newCategory} />
      ))}
    </div>
  );
}

export default ToDoList;
