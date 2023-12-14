const express = require("express");
const { prisma } = require("./prismaClient.js");

const app = express();

app.use(express.json());

app.post("/", async (req, res) => {
  const { name } = req.body;
  const createdUser = await prisma.user.create({
    data: {
      name,
    },
  });
  res.status(200).send(createdUser);
});

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

app.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const updatedUser = await prisma.user.update({
    data: {
      name,
    },
    where: {
      id,
    },
  });

  res.status(200).send(updatedUser);
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
