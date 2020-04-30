import express, { Request, Response, NextFunction } from "express";
import { json } from "body-parser";
import todoRoutes from "./routes/todos";

const app = express();
const port = 3000;

app.use("/todos", todoRoutes);
app.use(json());

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.json({ message: err.message, code: res.status });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
