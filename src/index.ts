import app, { nodeEnv, PORT } from "./config/Express";

app.listen(PORT, () =>
  console.log(`server running in  ${nodeEnv} mode on port ${PORT} 🔥 !`),
);
