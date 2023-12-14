const express = require("express");
const { prisma } = require("./prismaClient.js");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  console.log("test");
  const findUser = await prisma.user.findMany({});
  console.log(findUser);
  res.status(200).send(findUser);
});

app.listen(3000, () => {
  console.log("Server runing. http://localhost:3000");
});
