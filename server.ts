import {serveFile } from "https://deno.land/std@0.207.0/http/file_server.ts";

Deno.serve((req: Request) => {

  const pathname = new URL(req.url).pathname;
  if (pathname === "/") {

    return serveFile(req, "./index.html");
  }

  return new Response("404: Not Found", {
    status: 404,
  });
});