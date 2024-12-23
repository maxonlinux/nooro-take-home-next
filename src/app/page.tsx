import Link from "next/link";
import TaskList from "./components/TaskList/TaskList";

const BASE_URL = process.env.BASE_URL;

export default async function Home() {
  try {
    const res = await fetch(`${BASE_URL}`);
    const data = await res.json();

    const tasks = data.data;

    if (!res.ok) {
      throw new Error("Something went wrong");
    }

    return (
      <div className="relative mt-24 flex flex-col gap-8">
        <Link
          href="/create"
          className="flex absolute items-center justify-center -mt-24 gap-2 w-full py-4 text-sm font-bold bg-blue-dark rounded-lg -translate-y-1/2 hover:bg-blue transition-colors duration-500"
        >
          Create Task
          <span className="material-symbols-rounded text-lg">add_circle</span>
        </Link>
        <TaskList tasks={tasks} />
      </div>
    );
  } catch (error) {
    const err = error instanceof Error ? error.message : "Something went wrong";

    return (
      <div className="flex items-center justify-center mt-24">
        <div className="flex flex-col gap-4">
          <h1>{err}</h1>
          <Link
            className="flex items-center gap-2 w-full py-4 text-blue"
            href="/"
          >
            <span className="material-symbols-rounded text-xl">arrow_back</span>
            Go home
          </Link>
        </div>
      </div>
    );
  }
}
