import "b/wat.ts";
import "@anthropic-ai/sdk";

import "drizzle-orm/libsql";

console.log("this never happens");
for (let i = 0; i < 10; i++) {
  if (i > 5) {
    console.log("a");
  }
}
