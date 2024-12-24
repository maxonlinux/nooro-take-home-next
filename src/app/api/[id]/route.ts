const BASE_URL = process.env.BASE_URL as string;

type Params = Promise<{ id: string }>;

export const PUT = async (request: Request, { params }: { params: Params }) => {
  try {
    const { id } = await params;
    const { title, color } = await request.json();

    if (!id) {
      return new Response("ID is required", { status: 400 });
    }

    if (!title) {
      return new Response("Title is required", { status: 400 });
    }

    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        color,
      }),
    });

    if (!res.ok) {
      return new Response("Failed to update todo", { status: res.status });
    }

    const data = await res.json();

    return new Response(JSON.stringify(data));
  } catch (error) {
    console.error("Error updating todo:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
};

export const PATCH = async (
  request: Request,
  { params }: { params: Params }
) => {
  try {
    const { id } = await params;
    const { completed } = await request.json();

    if (!id) {
      return new Response("ID is required", { status: 400 });
    }

    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        completed,
      }),
    });

    if (!res.ok) {
      return new Response("Failed to toggle todo", { status: res.status });
    }

    const data = await res.json();

    return new Response(JSON.stringify(data));
  } catch (error) {
    console.error("Error toggling todo:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
};

export const DELETE = async (
  request: Request,
  { params }: { params: Params }
) => {
  try {
    const { id } = await params;

    if (!id) {
      return new Response("ID is required", { status: 400 });
    }

    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      console.log("Failed to delete todo", res);
      return new Response("Failed to delete todo", { status: res.status });
    }

    const data = await res.json();

    console.log("Deleted todo:", data);

    return new Response(data);
  } catch (error) {
    console.error("Error deleting todo:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
};
