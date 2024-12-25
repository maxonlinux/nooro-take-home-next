"use client";

import { BaseTodo } from "@/types";
import Link from "next/link";
import TodoFormColorPicker from "./TodoFormColorPicker";
import { useActionState } from "react";

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
  todo?: BaseTodo;
  action: (prevState: any, formData: FormData) => Promise<any>;
  children: React.ReactNode;
}

const initialState = {
  message: "",
};

const TodoForm = ({ action, todo, children }: TodoFormProps) => {
  const [state, formAction] = useActionState(action, initialState);

  return (
    <form className="flex flex-col gap-12 mt-24" action={formAction}>
      <Link href="/">
        <span className="material-symbols-rounded">arrow_back</span>
      </Link>
      <div className="flex flex-col gap-6">
        <FieldWithLabel title="Title">
          <input
            name="title"
            type="text"
            placeholder="Ex. Brush your teeth"
            className="appearance-none rounded-lg w-full p-4 bg-white/5 border border-white/10 placeholder:text-sm placeholder:opacity-50"
            autoFocus
            defaultValue={todo?.title}
          />
          {state.message && (
            <span className="text-red-500 text-sm">{state.message}</span>
          )}
        </FieldWithLabel>
        <FieldWithLabel title="Color">
          <TodoFormColorPicker defaultValue={todo?.color} />
        </FieldWithLabel>
      </div>
      <div>{children}</div>
    </form>
  );
};

export default TodoForm;
