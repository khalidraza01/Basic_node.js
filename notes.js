const mongoose=require('mongoose')

const khalidSchema= new mongoose.Schema({
name:{
    type:String,
  
},
age:{
    type:Number
},
education:{
    type :String,
  
},
address:{
    type:String
},
hobby:{
    type:String
},
email:{
type:String,

}

});

const khalid= mongoose.model("khalid",khalidSchema);
module.exports=khalid;