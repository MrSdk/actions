import pino from "pino"

export default function ( level = "trace" ) {
  const loggerSingleton = pino({
    level
  });

  return loggerSingleton;
};