import expresses, { Application, Request } from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import Local from "./Local";

const app: Application = expresses();
Local.init(app);
app.use(cookieParser());
app.use(cors());
app.use(expresses.json());
app.get("/", (_req: Request, res) => {
  res.send("Hello World!");
});
export const nodeEnv = Local.config().nodeEnv;
if (nodeEnv === "development") {
  app.use(morgan("dev"));
}
export const PORT = Local.config().port;

export default app;
