module.exports = app => {
  const user = require("../controllers/user.controller.js");

  var router = require("express").Router();

  router.post("/", user.AddNewUser);

  router.get("/", user.getAllUsers);

  router.get("/:id", user.getUserById);

  router.put("/:id", user.updateUser);

  router.delete("/:id", user.deleteUser);

  router.delete("/", user.deleteAllUsers);

  app.use("/api/users", router);
};