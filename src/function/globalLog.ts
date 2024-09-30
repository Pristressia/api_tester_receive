export default function globalLog(
  log: string,
  type: "log" | "info" | "error" | "warn"
): void {
  switch (type) {
    case "log":
      console.log(log);
      break;
    case "info":
      console.info(log);
      break;
    case "error":
      console.error(log);
      break;
    case "warn":
      console.warn(log);
      break;
    default:
      console.log(log);
      break;
  }
}
