// if any of these imports is removed it works fine
import "b/wat.ts";
import "@anthropic-ai/sdk";

// if below import is removed it works fine
import "@libsql/client";

console.log("this never happens");
for (let i = 0; i < 10; i++) {
  if (i > 5) {
    console.log("a");
  }
}
