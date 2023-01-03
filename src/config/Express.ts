import expresses, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import pathToSwaggerUI from "swagger-ui-dist";
import Local from "./Local";
import userRoutes from "@/routes/userRoutes";
import { errHandler, notFound } from "@/middlewares/errorMiddlewares";
import authEncryption from "@/middlewares/authEncryption";

const swggert = pathToSwaggerUI.absolutePath();
const app: Application = expresses();
Local.init(app);
app.use(cookieParser());
app.use(cors());
app.use(expresses.json());
// app.get("/", (_req: Request, res) => {
//   res.send("Hello World!");
// });
const apiBaseUrl = Local.config().apiPrefix;
app.use(expresses.static(swggert));
console.log(apiBaseUrl);
app.use(`/${apiBaseUrl}/auth`, userRoutes);
app.use(notFound);
app.use(errHandler);
app.use(authEncryption);

export const nodeEnv = Local.config().nodeEnv;
if (nodeEnv === "development") {
  app.use(morgan("dev"));
}
export const PORT = Local.config().port;

export default app;
