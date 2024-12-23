"use client";

import { FormTodo } from "@/types";
import Link from "next/link";

const colors = [
  "#cd4e2d",
  "#d9942b",
  "#e8c93b",
  "#73b95b",
  "#4d6cf4",
  "#534ac7",
  "#9151d1",
  "#cc484a",
  "#8c7a55",
];

interface FieldWithLabelProps {
  title: string;
  children: React.ReactNode;
}

const FieldWithLabel = ({ title, children }: FieldWithLabelProps) => {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-blue text-sm font-bold">{title}</span>
      {children}
    </div>
  );
};

interface TodoFormProps {
  todo: FormTodo;
  setTodo: React.Dispatch<React.SetStateAction<FormTodo>>;
  onSubmit: (e: React.FormEvent) => void;
  children: React.ReactNode;
}

const TodoForm = ({ onSubmit, todo, setTodo, children }: TodoFormProps) => {
  const handleColorClick = (color: string) => {
    setTodo((prev) => ({
      ...prev,
      color: prev.color === color ? "" : color,
    }));
  };

  return (
    <form className="flex flex-col gap-12 mt-24" onSubmit={onSubmit}>
      <Link href="/">
        <span className="material-symbols-rounded">arrow_back</span>
      </Link>
      <div className="flex flex-col gap-6">
        <FieldWithLabel title="Title">
          <input
            name="title"
            type="text"
            value={todo.title}
            onChange={(e) =>
              setTodo((prev) => ({
                ...prev,
                title: e.target.value,
              }))
            }
            placeholder="Ex. Brush your teeth"
            className="appearance-none rounded-lg w-full p-4 bg-white/5 border border-white/10 placeholder:text-sm placeholder:opacity-50"
          />
        </FieldWithLabel>
        <FieldWithLabel title="Color">
          <div className="flex gap-4">
            {colors.map((color, i) => (
              <button
                type="button"
                key={i}
                onClick={() => handleColorClick(color)}
              >
                <div
                  className={`size-[52px] rounded-full border-2 ${
                    color === todo.color ? "border-white" : "border-transparent"
                  }`}
                  style={{ background: color }}
                />
              </button>
            ))}
          </div>
        </FieldWithLabel>
      </div>
      <div>{children}</div>
    </form>
  );
};

export default TodoForm;
