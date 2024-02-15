import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { getUserByEmail, getUsers } from "./services/user";

const app = express();
const PORT = 5000;

app.get("/", async (req: Request, res: Response) => {
  try {
    const users = await getUsers();
    const user = await getUserByEmail("aa");

    if (!user)
      return res
        .status(400)
        .json({ message: "指定したメールアドレスは登録されていません。" });

    return res.status(200).json({ body: users });
  } catch (err) {
    return res
      .status(500)
      .json({ body: [], message: "ユーザー取得に失敗しました。" });
  }
});

app.listen(PORT, () => {
  console.log("サーバー起動中・・・");
});
