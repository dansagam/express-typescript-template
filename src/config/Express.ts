import expresses, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
// import pathToSwaggerUI from "swagger-ui-dist";
import swaggerUi from "swagger-ui-express";
import Local from "./Local";
import userRoutes from "@/routes/userRoutes";
import { errHandler, notFound } from "@/middlewares/errorMiddlewares";
import authEncryption from "@/middlewares/authEncryption";
import { authSwagger, authSchema } from "@/routes/user.swagger";
import swaggerDoc from "src/swagger";

// const swggert = pathToSwaggerUI.absolutePath();
const app: Application = expresses();
Local.init(app);

const options = {
  customCss: ".swagger-ui .topbar { display: none }",
};

app.use(cookieParser());
app.use(cors());
app.use(expresses.json());

// app.get("/", (_req: Request, res) => {
//   res.send("Hello World!");
// });

const apiBaseUrl = Local.config().apiPrefix;
// app.use(expresses.static(swggert));

app.use(`/${apiBaseUrl}/auth`, userRoutes);

(swaggerDoc as { [key: string]: any }).paths = { ...authSwagger };
(swaggerDoc as { [key: string]: any }).definitions = { ...authSchema };

app.use("/app-doc", swaggerUi.serve, swaggerUi.setup(swaggerDoc, options));

app.use(notFound);
app.use(errHandler);
app.use(authEncryption);

export const nodeEnv = Local.config().nodeEnv;
if (nodeEnv === "development") {
  app.use(morgan("dev"));
}
export const PORT = Local.config().port;

export default app;
