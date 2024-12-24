import { requestHandler } from "@/utils";

const BASE_URL = process.env.BASE_URL as string;

type Params = Promise<{ id: string }>;

export const PUT = async (request: Request, { params }: { params: Params }) => {
  const { id } = await params;
  const { title, color } = await request.json();

  if (!id) {
    return new Response("ID is required", { status: 400 });
  }

  if (!title) {
    return new Response("Title is required", { status: 400 });
  }

  return requestHandler({
    method: "PUT",
    url: `${BASE_URL}/${id}`,
    body: { title, color },
  });
};

export const PATCH = async (
  request: Request,
  { params }: { params: Params }
) => {
  const { id } = await params;
  const { completed } = await request.json();

  if (!id) {
    return new Response("ID is required", { status: 400 });
  }

  return requestHandler({
    method: "PATCH",
    url: `${BASE_URL}/${id}`,
    body: { completed },
  });
};

export const DELETE = async (
  request: Request,
  { params }: { params: Params }
) => {
  const { id } = await params;

  if (!id) {
    return new Response("ID is required", { status: 400 });
  }

  return requestHandler({
    method: "DELETE",
    url: `${BASE_URL}/${id}`,
  });
};
