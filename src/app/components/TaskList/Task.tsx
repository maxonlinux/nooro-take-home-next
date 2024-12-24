"use client";

import { Todo } from "@/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import TaskCheckbox from "./TaskCheckbox";
import TaskDeletePrompt from "./TaskDeletePrompt";
import TaskDeleteButtons from "./TaskDeleteButtons";

interface TaskProps {
  todo: Todo;
}

const Task = ({ todo }: TaskProps) => {
  const { id, color, title } = todo;

  const [completed, setCompleted] = useState(todo.completed);
  const [deleted, setDeleted] = useState(false);
  const [showDeletePrompt, setShowDeletePrompt] = useState(false);

  const router = useRouter();

  const handleComplete = async () => {
    const newCompleted = !completed;

    setCompleted(newCompleted);

    try {
      const res = await fetch(`/api/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          completed: newCompleted,
        }),
      });

      if (!res.ok) {
        setCompleted(newCompleted);
        return;
      }

      router.refresh();
    } catch (error) {
      setCompleted(newCompleted);
      console.error(error);
    }
  };

  const handleDelete = async () => {
    setDeleted(true);

    try {
      const res = await fetch(`/api/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        setDeleted(false);
        return;
      }

      router.refresh();
    } catch (error) {
      setDeleted(false);
      console.error(error);
    }
  };

  return (
    <>
      <div
        className={`relative flex gap-3 rounded-lg bg-white/5 border p-4 duration-500 overflow-hidden transition-all ${
          completed ? "border-transparent" : "border-white/10"
        } ${deleted ? "-translate-x-full opacity-0 scale-50" : ""}`}
      >
        <TaskDeletePrompt showDeletePrompt={showDeletePrompt} />
        <div className="flex items-center justify-center relative shrink-0 size-6">
          <TaskCheckbox
            color={color}
            checked={completed}
            onChange={handleComplete}
          />
        </div>
        <Link
          href={`/edit/${id}`}
          className={`inline-flex items-center text-sm leading-5 break-words w-full transition-opacity min-w-0 duration-500 min-h-6 mr-8 ${
            completed ? "line-through opacity-50" : "opacity-100"
          }`}
        >
          <p className="min-w-0">{title}</p>
        </Link>
        <div className="absolute right-0 mr-4 flex gap-2 z-30">
          <TaskDeleteButtons
            onDelete={handleDelete}
            showDeletePrompt={showDeletePrompt}
            setShowDeletePrompt={setShowDeletePrompt}
          />
        </div>
      </div>
    </>
  );
};

export default Task;
