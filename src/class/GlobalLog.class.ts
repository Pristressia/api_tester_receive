import globalLog from "../function/globalLog";

type ConsoleType = "log" | "info" | "error" | "warn";

export default class GlobalLog {
  // log :string|null = null;
  header: string | null = null;

  constructor(header: string | null) {
    this.header = header;
  }

  Log(textLog: string | null, typeLog: ConsoleType = "log") {
    const now = new Date(Date.now());
    globalLog(`${now.toString()} | [${this.header}] : ${textLog}`, typeLog);
  }
}
