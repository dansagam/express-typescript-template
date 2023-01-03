import "module-alias/register";
// import app, { nodeEnv, PORT } from "./config/Express";
import app, { nodeEnv, PORT } from "@/config/Express";

app.listen(PORT, () =>
  console.log(`server running in  ${nodeEnv} mode on port ${PORT} 🔥 !`),
);
