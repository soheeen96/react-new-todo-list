import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { addCategoryState, newCategoryState } from "../atoms";

interface ICategory {
  category: string;
}

function NewCategory() {
  const [addCategory, setAddCategory] = useRecoilState(addCategoryState);
  const [newCategory, setNewCategory] = useRecoilState(newCategoryState);
  const { register, handleSubmit, setValue } = useForm<ICategory>();
  const onValid = ({ category }: ICategory) => {
    setNewCategory((allCategories) => {
      return [...allCategories, category];
      //setAddCategory(true);
    });
    setValue("category", "");
  };
  return (
    <>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("category")}
          type="text"
          placeholder="새로운 카테고리"
        />
        <button>+</button>
      </form>
    </>
  );
}

export default NewCategory;
