let mongoose=require('mongoose');

  require('dotenv').config();

// Define the mongodb connection url

//const mongoURL='mongodb://localhost:27017/khalidDeatails' //replace hotel u can
//const mongoURL="mongodb+srv://razamdkhalid90:khalid@cluster0.huw7o.mongodb.net/?retryWrites=true&w=majority&tls=true"
const mongoURL=process.env.MONGODB_URL
// const mongoURL=process.env.MONGODB_URL_local

// setup MongoDB connection


mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Error connecting to MongoDB:", err));



// Get the default connections
// Mongoose maintaine a default connection object represeting the mongodb coonnection.

const db=mongoose.connection;

// define event listner for database connection
// mongoose.set('debug', true);

db.on('connected',()=>{
    console.log('connected to mongoDB server');
    
});

db.on('error',(err)=>{
    console.log('error to mongoDB server',err);
    
});

db.on('disconnected',()=>{
    console.log('disconnected to mongoDB server');
    
});


//Export the database connections
module.exports = db;


