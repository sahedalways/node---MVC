const users = require("../model/user.model");
const path = require("path");

exports.getUser = (req, res) => {
  res.sendFile(path.join(__dirname + "/../view/index.html"));
};

exports.postUser = (req, res) => {
  const name = req.body.name;
  const age = Number(req.body.age);

  const user = {
    name,
    age,
  };

  users.push(user);

  res.status(202).json({
    success: true,
    users,
  });
};
