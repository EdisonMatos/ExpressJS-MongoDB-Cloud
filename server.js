const express = require("express");
const { prisma } = require("./prismaClient.js");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  const findAll = await prisma.user.findMany({});
  res.status(200).send(findAll);
});

app.get("/:id", async (req, res) => {
  const { id } = req.params;
  const findOne = await prisma.user.findFirst({
    where: {
      id,
    },
  });
  res.status(200).send(findOne);
});

app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedUser = await prisma.user.delete({
    where: {
      id,
    },
  });
  res.status(200).send(deletedUser);
});

app.listen(3000, () => {
  console.log("Server runing. http://localhost:3000");
});
