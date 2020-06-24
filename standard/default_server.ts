import { server } from "./my_server.ts";

for await (const request of server) {
  const headers = new Headers();
  headers.set("Content-Type", "text/html");

  const body = `
    <h2>Our First App</h2>
    <form>
      <input type='text'>
      <button>Submit</button>
    </form>
  `;

  request.respond({ body: body, headers: headers });
}
