const buffer = new Uint8Array(1024);

console.log("Please enter you text...");
await Deno.stdin.read(buffer);

const decoder = new TextDecoder();
const input = decoder.decode(buffer);
console.log("User entered: ", input);
