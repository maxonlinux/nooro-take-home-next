
import { Metadata } from "next";
import TodoFormCreate from "../components/TodoForm/TodoFormCreate";

export const metadata: Metadata = {
  title: "Create Todo",
};

const Page = () => {
  return <TodoFormCreate />;
};

export default Page;
