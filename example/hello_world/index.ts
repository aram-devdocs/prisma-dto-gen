import express, { Request, Response } from "express";
import { User, UserSchema } from "./types/models";
const app = express();
const PORT = 3000;

app.get("/", (req: Request, res: Response) => {
  const user: User = {
    id: 1,
    name: "John Doe",
    email: "test@test.com",
  };

  const isUserValid = UserSchema.safeParse(user);

  res.send("Hello World! " + JSON.stringify(isUserValid));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
