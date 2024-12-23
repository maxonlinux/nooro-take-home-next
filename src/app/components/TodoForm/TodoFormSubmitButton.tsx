interface ContentProps {
  loading: boolean;
  text: string;
  icon: string;
}

type TodoFormSubmitButtonProps = ContentProps & {
  disabled: boolean;
};

const Content = ({ loading, text, icon }: ContentProps) => {
  if (loading) {
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

const TodoFormSubmitButton = ({
  text,
  icon,
  loading,
  disabled,
}: TodoFormSubmitButtonProps) => {
  return (
    <button
      type="submit"
      className="flex items-center justify-center gap-2 w-full py-4 text-sm font-bold bg-blue-dark rounded-lg hover:bg-blue transition-colors duration-500 disabled:pointer-events-none disabled:opacity-50"
      disabled={disabled}
    >
      <Content loading={loading} text={text} icon={icon} />
    </button>
  );
};

export default TodoFormSubmitButton;
