const express=require('express');
const router=express.Router();
const khalid = require('../../notes.js');


    
router.post("/", async (req, res) => {
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

  router.get('/', async(req,res)=>{
try {
    const data =await khalid.find();

console.log('data is find');
res.status(200).json(data);

} catch (error) {
    console.log('server not found');
    res.status(500).json({error:'error is find'})
    
    
}
  })


    
    module.exports=router;