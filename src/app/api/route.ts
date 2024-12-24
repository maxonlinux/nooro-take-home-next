import { requestHandler } from "@/utils";

const BASE_URL = process.env.BASE_URL as string;

export async function POST(request: Request): Promise<Response> {
  const body = await request.json();
  const { title, color } = body;

  if (!title) {
    return new Response("Title is required", { status: 400 });
  }

  return requestHandler({
    method: "POST",
    url: BASE_URL,
    body: { title, color },
  });
}
