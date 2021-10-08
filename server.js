const express = require("express");
const app = express();
const users = require("./users.json");

const getFunction = (req, res) => {
  res.send("Hello Express");
};
const usersFunction = (req, res) => {
  res.send(users);
};
const getUsersByIdFunction = (req, res) => {
  const userId = parseInt(req.params.a);
  res.send(users.find((u) => u.id === userId));
};
app.get("/", getFunction);
app.get("/users", usersFunction);
app.get("/users/:a", getUsersByIdFunction);

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Server is up and running at PORT: ${PORT}`)
);
