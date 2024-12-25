"use server";

import { requestHandler } from "@/utils";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

const BASE_URL = process.env.BASE_URL as string;

export async function createTask(_prevState: any, formData: FormData) {
  const title = formData.get("title") as string;
  const color = formData.get("color") as string;

  if (!title) {
    return { message: "Title is required" };
  }

  const res = await requestHandler({
    method: "POST",
    url: BASE_URL,
    body: { title, color },
  });

  if (res.error) {
    return res.error;
  }

  redirect("/");
}

export async function updateTask(
  id: string,
  _prevState: any,
  formData: FormData
) {
  const title = formData.get("title") as string;
  const color = formData.get("color") as string;

  if (!title) {
    return { message: "Title is required" };
  }

  const res = await requestHandler({
    method: "PUT",
    url: `${BASE_URL}/${id}`,
    body: { title, color },
  });

  if (res.error) {
    return res.error;
  }

  redirect("/");
}

export async function toggleTask(id: number, completed: boolean) {
  const res = await requestHandler({
    method: "PATCH",
    url: `${BASE_URL}/${id}`,
    body: { completed: !completed },
  });

  if (res.error) {
    return res.error;
  }

  revalidateTag("todos");
}

export async function deleteTask(id: number) {
  const res = await requestHandler({
    method: "DELETE",
    url: `${BASE_URL}/${id}`,
  });

  if (res.error) {
    return res.error;
  }

  revalidateTag("todos");
}
