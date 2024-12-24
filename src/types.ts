import { HTTP_METHOD } from "next/dist/server/web/http";

export interface BaseTodo {
  title: string;
  color?: string;
}

export interface Todo extends BaseTodo {
  id: number;
  completed: boolean;
}

export type RequestHandlerParams = {
  method: HTTP_METHOD;
  url: string;
  body?: Record<string, unknown>;
};
