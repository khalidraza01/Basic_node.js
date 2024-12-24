let mongoose=require('mongoose');

// Define the mongodb connection url

const mongoURL='mongodb://localhost:27017/khalidDeatails' //replace hotel u can

// setup MongoDB connection

mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

// Get the default connections
// Mongoose maintaine a default connection object represeting the mongodb coonnection.

const db=mongoose.connection;

// define event listner for database connection

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