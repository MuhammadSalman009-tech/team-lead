require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserRoute = require("./Routes/user");
const LeadRoute = require("./Routes/lead");
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

//Connection to MongoDB
const CONNECTION_URL = `mongodb+srv://${process.env.MOGODB_CREDENDIALS}@cluster0.fxqif.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  //Listening to server Server
  .then(() =>
    app.listen(PORT, () => console.log("Serving at http://localhost:" + PORT))
  )
  .catch((error) => console.log("Database Connection Failed " + error));

//Handling Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/users", UserRoute);
app.use("/leads", LeadRoute);
