import {
  serveDir,
  serveFile,
} from "https://deno.land/std@0.207.0/http/file_server.ts";

Deno.serve((req: Request) => {
  const pathname = new URL(req.url).pathname;
  console.log(pathname);
  if (pathname === "/" || pathname === "index.html") {
    return serveFile(req, "./public/index.html");
  }
  if (pathname === "/index.js") {
    return serveFile(req, "./public/index.js");
  }
  if (pathname === "/style.css") {
    return serveFile(req, "./public/style.css");
  }

  return new Response("404: Not Found", {
    status: 404,
  });
});
