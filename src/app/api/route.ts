import { NextRequest } from "next/server";

const BASE_URL = process.env.BASE_URL as string;

export async function POST(request: NextRequest): Promise<Response> {
  try {
    const body = await request.json();
    const { title, color } = body;

    if (!title) {
      return new Response("Title is required", { status: 400 });
    }

    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        color,
      }),
    });

    if (!res.ok) {
      return new Response("Failed to create todo", { status: res.status });
    }

    const data = await res.json();
    return new Response(JSON.stringify(data), { status: 201 });
  } catch (error) {
    console.error("Error creating todo:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
