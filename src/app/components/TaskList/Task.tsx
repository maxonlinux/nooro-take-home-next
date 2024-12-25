"use client";

import { Todo } from "@/types";
import Link from "next/link";
import TaskCheckbox from "./TaskCheckbox";
import TaskDeletePrompt from "./TaskDeletePrompt";
import { useState } from "react";
import { deleteTask, toggleTask } from "@/app/actions";

interface TaskProps {
  todo: Todo;
}

const Task = ({ todo }: TaskProps) => {
  const [completed, setCompleted] = useState(todo.completed);
  const [deleted, setDeleted] = useState(false);

  const handleDelete = async () => {
    setDeleted(true);

    const res = await deleteTask(todo.id);

    if (res) {
      console.error(res);
      setDeleted(false);
    }
  };

  const handleToggle = async () => {
    setCompleted(!todo.completed);

    const res = await toggleTask(todo.id, todo.completed);

    if (res) {
      console.error(res);
      setCompleted(todo.completed);
    }
  };

  return (
    <div
      className={`relative flex gap-3 rounded-lg bg-white/5 border p-4 duration-500 overflow-hidden transition-all ${
        completed ? "border-transparent" : "border-white/10"
      } ${deleted ? "opacity-0 -translate-x-full" : "opacity-100"}`}
    >
      <TaskDeletePrompt onDelete={handleDelete} />
      <TaskCheckbox
        onToggle={handleToggle}
        color={todo.color}
        checked={completed}
      />
      <Link
        href={`/edit/${todo.id}`}
        className={`inline-flex items-center text-sm leading-5 break-words w-full transition-opacity min-w-0 duration-500 min-h-6 mr-8 ${
          completed ? "line-through opacity-50" : "opacity-100"
        }`}
      >
        <p className="min-w-0">{todo.title}</p>
      </Link>
    </div>
  );
};

export default Task;
