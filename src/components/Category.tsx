import { useRecoilState, useRecoilValue } from "recoil";
import { Categories, categoryState, newCategoryState } from "../atoms";

function Category() {
  const [category, setCategory] = useRecoilState(categoryState);
  const newCategory = useRecoilValue(newCategoryState);
  const onClick = (newCategory: string) => {
    setCategory(newCategory as any);
  };
  return (
    <div>
      <button onClick={() => onClick(Categories.Todo)}>To Do</button>
      <button onClick={() => onClick(Categories.Doing)}>Doing</button>
      <button onClick={() => onClick(Categories.Done)}>Done</button>
      {newCategory.length !== 0 &&
        newCategory.map((category) => (
          <button key={category} onClick={() => onClick(category)}>
            {category}
          </button>
        ))}
    </div>
  );
}
export default Category;
