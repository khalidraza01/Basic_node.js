const express = require("express");
const app = express();
const db = require("./db.js");
const person = require("./models/Person");
const bodyParser=require('body-parser');
const khalid=require('./notes.js')
app.use(bodyParser.json())

app.get("/", function (req, res) {
  res.send("welcome khalid");
});

app.post("/khalid", async (req, res) => {
  try {
    const data = req.body; //Assuming the request body contain the person data

    // Create a new person Document using the Mongoose Model
    const newPerson = khalid(data);
    //Save the new person to the database
    const response = await newPerson.save();
    console.log("data saved");
    res.status(200).json(response);
  }
   catch (err) {
    console.log("err");
    res.status(500).json({ error: "Internal Server Error" });
  }
});


const Personrouter=require('./models/Router/PersonRouter.js');
app.use('/person', Personrouter);

const notesRouter=require('./models/Router/notesRouter.js');
app.use('/khalid',notesRouter);

app.listen(3000, () => {
  console.log("listing port no 3000 ");
});