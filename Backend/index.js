const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const userRoutes = require("./Routes/userRoutes");
const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb+srv://root:12345@cluster0.6vhkfmy.mongodb.net/MusicPlayer");
    console.log("Database Connected");
  } catch (error) {
    console.log("error in db connection");
    console.log(error);
  }

  // create account on mongodb atlas
};
app.use(express.json()); //helps me to convert the request into json format
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/users", userRoutes);
const startServer = async () => {
  await dbConnect();
  app.listen(4000, () => {
    console.log("Server started on port 4000");
  });
};

startServer();
