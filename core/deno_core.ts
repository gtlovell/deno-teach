setTimeout(() => {
  const encoder = new TextEncoder();
  const fileContent = encoder.encode(
    "This is some text to put inside my new file made by Deno!",
  );
  Deno.writeFile("test.txt", fileContent)
    .then(() => console.log("Done!"));
}, 1000);
