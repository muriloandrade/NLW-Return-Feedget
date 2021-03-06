import express from "express";
import cors from "cors";
import { routes } from "./routes";

const app = express();

app.use(cors({origin: process.env.ORIGIN}));
app.use(express.json()); //importante ser antes das rotas
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log("HTTP server running!");
});
