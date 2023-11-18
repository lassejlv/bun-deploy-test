const server = Bun.serve({
  hostname: "::",
  port: Bun.env.PORT ?? 3001,
  fetch(request) {
    return new Response("Welcome to Bun!");
  },
});

console.log(`Listening on http://localhost:${server.port}`);
