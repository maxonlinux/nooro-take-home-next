export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  color?: string;
}

export type FormTodo = Omit<Todo, "id" | "completed">;
