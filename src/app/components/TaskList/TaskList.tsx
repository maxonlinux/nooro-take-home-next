import Image from "next/image";
import Task from "./Task";
import { Todo } from "@/types";

interface PillWithLabelProps {
  label: string;
  value: number | string;
  className?: string;
}

interface TaskListProps {
  tasks: Todo[];
}

const PillWithLabel = ({ label, value, className }: PillWithLabelProps) => {
  return (
    <div className="flex gap-2 items-center font-bold">
      <span className={`text-sm ${className}`}>{label}</span>
      <div className="flex items-center px-2 h-[19px] text-xs rounded-full bg-gray-400/15 text-gray-300">
        {value}
      </div>
    </div>
  );
};

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 border-t border-white/10 py-16 px-6">
      <Image src="/clipboard.svg" alt="Clipboard" width={56} height={56} />
      <span className="text-foreground/50 font-bold">
        You don't have any tasks registered yet.
      </span>
      <span className="text-foreground/50">
        Create tasks and organize your to-do items.
      </span>
    </div>
  );
};

const Content = ({ tasks }: TaskListProps) => {
  if (!tasks.length) {
    return <EmptyState />;
  }

  return tasks.map((todo) => <Task key={todo.id} todo={todo} />);
};

const TaskList = ({ tasks = [] }: TaskListProps) => {
  const completedTasksCount = tasks.length
    ? ` ${tasks.filter((task) => task.completed).length} of ${tasks.length}`
    : 0;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between">
        <PillWithLabel
          label="Tasks"
          value={tasks.length}
          className="text-blue"
        />
        <PillWithLabel
          label="Completed"
          value={completedTasksCount}
          className="text-purple"
        />
      </div>
      <Content tasks={tasks} />
    </div>
  );
};

export default TaskList;
