const userRouter = require("./routes/user.route");
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(userRouter);


app.use((req, res) => {
  res.status(404).json({
    message: "result not found !",
  });
});

app.listen(PORT, () => {
  console.log(`Your server is running at http://localhost:${PORT}`);
});
