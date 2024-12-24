import Link from "next/link";
import TodoFormEdit from "@/app/components/TodoForm/TodoFormEdit";
import { Metadata } from "next";

const BASE_URL = process.env.BASE_URL;

export const metadata: Metadata = {
  title: "Edit Todo",
};

const ErrorState = ({ error }: { error: string }) => (
  <div className="flex items-center justify-center mt-24">
    <div className="flex flex-col gap-4">
      <h1>{error}</h1>
      <Link className="flex items-center gap-2 w-full py-4 text-blue" href="/">
        <span className="material-symbols-rounded text-xl">arrow_back</span>
        Go home
      </Link>
    </div>
  </div>
);

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  try {
    const { id } = await params;

    const res = await fetch(`${BASE_URL}/${id}`, {
      cache: "no-cache",
    });

    const data = await res.json();

    const todo = data;

    if (res.status === 404) {
      throw new Error("Todo not found");
    }

    if (!res.ok) {
      throw new Error("Something went wrong");
    }

    return <TodoFormEdit initialTodo={todo} />;
  } catch (error) {
    const err = error instanceof Error ? error.message : "Something went wrong";

    return <ErrorState error={err} />;
  }
};

export default Page;
