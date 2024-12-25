import { Metadata } from "next";
import { createTask } from "../actions";
import TodoForm from "../components/TodoForm/TodoForm";
import TodoFormSubmitButton from "../components/TodoForm/TodoFormSubmitButton";

export const metadata: Metadata = {
  title: "Create Todo",
};

const Page = async () => {
  return (
    <TodoForm action={createTask}>
      <TodoFormSubmitButton text="Create Task" icon="add_circle" />
    </TodoForm>
  );
};

export default Page;
