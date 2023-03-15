import React from "react";
import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "../atoms";

function ToDo({
  text,
  category,
  id,
  newCategory,
}: IToDo & { newCategory: string[] }) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;

    if (name === category) {
      return;
    }

    setToDos((oldToDos) => {
      const targetIdx = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };

      return [
        ...oldToDos.slice(0, targetIdx),
        newToDo,
        ...oldToDos.slice(targetIdx + 1),
      ];
    });
  };
  return (
    <li>
      <div>
        <p>{text}</p>
        <button
          name={Categories.Todo}
          onClick={onClick}
          disabled={category === Categories.Todo}
        >
          Todo
        </button>
        <button
          name={Categories.Doing}
          onClick={onClick}
          disabled={category === Categories.Doing}
        >
          Doing
        </button>
        <button
          name={Categories.Done}
          onClick={onClick}
          disabled={category === Categories.Done}
        >
          Done
        </button>

        {newCategory.map((newcategory) => (
          <button
            key={newcategory}
            name={newcategory}
            onClick={onClick}
            disabled={category === newcategory}
          >
            {newcategory}
          </button>
        ))}
      </div>
    </li>
  );
}
export default ToDo;
