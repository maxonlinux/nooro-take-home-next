import { RequestHandlerParams } from "./types";

export const requestHandler = async ({
  method,
  url,
  body,
}: RequestHandlerParams) => {
  try {
    const headers = { "Content-Type": "application/json" };
    const options: RequestInit = { method, headers };

    if (body) {
      options.body = JSON.stringify(body);
    }

    const res = await fetch(url, options);

    if (!res.ok) {
      return { error: res };
    }

    const data = await res.json();

    console.log(data);
    return data;
  } catch (error) {
    console.error(`Error in ${method} request:`, error);
    return { error: "Something went wrong" };
  }
};
