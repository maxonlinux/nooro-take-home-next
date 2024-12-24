interface TaskDeletePromptProps {
  showDeletePrompt: boolean;
}

const TaskDeletePrompt = ({ showDeletePrompt }: TaskDeletePromptProps) => {
  return (
    <div
      className={`absolute left-0 top-0 flex items-center justify-center size-full z-20 bg-background transition-opacity p-4 pr-14 ${
        showDeletePrompt ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <span className="opacity-50 text-xs">
        Sure you want to delete? This action cannot be undone.
      </span>
    </div>
  );
};

export default TaskDeletePrompt;
