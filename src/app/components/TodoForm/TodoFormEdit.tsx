"use client";

import { BaseTodo, Todo } from "@/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoFormSubmitButton from "./TodoFormSubmitButton";

type TodoFormEditProps = {
  initialTodo: Todo;
};

const TodoFormEdit = ({ initialTodo }: TodoFormEditProps) => {
  const [todo, setTodo] = useState<BaseTodo>(initialTodo);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const todoId = initialTodo.id;

  const handleEditTodo = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    try {
      if (!todo.title) {
        setError("Title is required");

        return;
      }

      const res = await fetch(`/api/${todoId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: todo.title,
          color: todo.color,
        }),
      });

      if (!res.ok) {
        setError("Failed to update todo");
        return;
      }

      router.push("/");
    } catch (error) {
      setError("Something went wrong");

      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <TodoForm todo={todo} setTodo={setTodo} onSubmit={handleEditTodo}>
      <TodoFormSubmitButton
        disabled={loading || !todo.title}
        loading={loading}
        text="Save"
        icon="Done"
      />
      {error ? <div className="text-red-500 text-sm mt-4">{error}</div> : null}
    </TodoForm>
  );
};

export default TodoFormEdit;
