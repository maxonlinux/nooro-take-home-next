import { RequestHandlerParams } from "./types";

export const requestHandler = async ({
  method,
  url,
  body,
}: RequestHandlerParams): Promise<Response> => {
  try {
    const headers = { "Content-Type": "application/json" };
    const options: RequestInit = { method, headers };

    if (body) {
      options.body = JSON.stringify(body);
    }

    const res = await fetch(url, options);

    if (!res.ok) {
      return new Response(`Failed to ${method} resource`, {
        status: res.status,
      });
    }

    const data = await res.json();
    return new Response(JSON.stringify(data));
  } catch (error) {
    console.error(`Error in ${method} request:`, error);
    return new Response("Internal Server Error", { status: 500 });
  }
};
