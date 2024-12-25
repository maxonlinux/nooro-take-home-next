"use client";

import { useFormStatus } from "react-dom";

interface TodoFormSubmitButtonProps {
  text: string;
  icon: string;
}

interface ContentProps extends TodoFormSubmitButtonProps {
  pending: boolean;
}

const Content = ({ text, icon, pending }: ContentProps) => {
  if (pending) {
    return (
      <>
        <span className="material-symbols-rounded text-lg animate-spin">
          progress_activity
        </span>
        Loading...
      </>
    );
  }

  return (
    <>
      {text}
      <span className="material-symbols-rounded text-lg">{icon}</span>
    </>
  );
};

const TodoFormSubmitButton = ({ text, icon }: TodoFormSubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="flex items-center justify-center gap-2 w-full py-4 text-sm font-bold bg-blue-dark rounded-lg hover:bg-blue transition-colors duration-500 disabled:pointer-events-none disabled:opacity-50"
      disabled={pending}
    >
      <Content text={text} icon={icon} pending={pending} />
    </button>
  );
};

export default TodoFormSubmitButton;
