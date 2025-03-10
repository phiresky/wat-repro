import pino from "pino";
const logger = pino({
  depthLimit: 3,
  hooks: {},
  transport: {
    target: "pino-pretty",
  },
});
