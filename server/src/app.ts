import express, { Express } from "express";
import cors from "cors";
import counterRoutes from "./routes";
import { xss } from "express-xss-sanitizer";

const app: Express = express();
app.use(express.json());
app.options(
  "*",
  cors({
    optionsSuccessStatus: 200,
  })
);
app.use(cors());
app.use(xss());

app.use(counterRoutes);
app.listen(4000, () => console.log("Server running"));
