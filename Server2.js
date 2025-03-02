const express = require("express");
const app = express();
const db = require("./db.js");
const person = require("./models/Person");
const khalid=require('./notes.js')
require('dotenv').config();
 const PORT=process.env.PORT || 3000;
 const bodyParser=require('body-parser');
app.use(bodyParser.json())
const passport=require('./auth.js')

//middleware function
const logRequest=(req,res,next)=>{
  console.log(` ${new Date().toLocaleString()} request made to : ${req.originalUrl}`);
  next();
  
}

app.use(logRequest);
app.use(passport.initialize());
// app.use(localAuthMiddleware)
  localAuthMiddleware=passport.authenticate('local',{session:false})

app.get("/", function (req, res) {
  res.send("welcome khalid");
});



const Personrouter=require('./models/Router/PersonRouter.js');
const notesRouter=require('./models/Router/notesRouter.js');
const Person = require("./models/Person");

app.use('/person', Personrouter);
app.use('/khalid' ,localAuthMiddleware, notesRouter);



app.listen(PORT, () => {
  console.log("listing port no 3000 ");
});
