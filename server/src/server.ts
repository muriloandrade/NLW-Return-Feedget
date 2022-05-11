import express from "express";
import cors from "cors";
import { routes } from "./routes";

const app = express();

app.use(cors());
app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  next();
})
app.use(express.json()); //importante ser antes das rotas
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log("HTTP server running!");
});
