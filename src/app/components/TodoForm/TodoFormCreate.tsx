"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import TodoForm from "./TodoForm";
import { FormTodo } from "@/types";
import TodoFormSubmitButton from "./TodoFormSubmitButton";

const initialTodo = {
  title: "",
  color: "",
};

const TodoFormCreate = () => {
  const [todo, setTodo] = useState<FormTodo>(initialTodo);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const handleCreateTodo = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    try {
      if (!todo.title) {
        setError("Title is required");

        return;
      }

      const res = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: todo.title,
          color: todo.color,
        }),
      });

      if (!res.ok) {
        setError("Failed to create todo");
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
    <TodoForm todo={todo} setTodo={setTodo} onSubmit={handleCreateTodo}>
      <TodoFormSubmitButton
        disabled={loading || !todo.title}
        loading={loading}
        text="Create Task"
        icon="add_circle"
      />
      {error ? <div className="text-red-500 text-sm mt-4">{error}</div> : null}
    </TodoForm>
  );
};

export default TodoFormCreate;
