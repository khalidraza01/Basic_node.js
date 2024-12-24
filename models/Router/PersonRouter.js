const express =require('express');
const router=express.Router();
const Person=require('../Person')

router.post('/', async (req, res) => {
  try {
    const data = req.body; //Assuming the request body contain the person data

    // Create a new person Document using the Mongoose Model
    const newPerson = Person(data);
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
  const data=await Person.find();
console.log('data fateched');
res.status(200).json(data)
} catch (error) {
  console.log('error find');
  res.status(500).json({error:'server error'})
  
}


})

router.get('/:workType', async(req, res)=>{
try {
  const workType=req.params.workType;
if(workType =='Chef' || workType =='Waiter' || workType =='Manager'){
const response=await Person.find({work: workType})
console.log('found worktype');
res.status(200).json(response);
}else{
  res.status(500).json({error:'invalid work type'})
}
  
} catch (error) {
  console.log('error');
  res.status(500).json({error:'not found workType'})
  
  
}


})

router.put('/:id',async(req,res)=>{
  try {
      const PersonId=req.params.id;
      const updatePersonId=req.body;
      const response= await Person.findByIdAndUpdate(PersonId,updatePersonId,{
        new:true,
        runValidators:true
    
      })
      if(!response){
        return res.status(404).json({error:'Person not found'})
      }
      console.log('data updated');
      res.status(200).json(response)
      
  } catch (error) {
    console.log('error');
    res.status(500).json({error:'not found '})
    
      
  }
})

router.delete('/:id',async (req,res)=>{
try {
  const personId=req.params.id;
const response= await Person.findByIdAndDelete(personId);

if(!response){
  return res.status(404).json({error:'Person not found'})
}

console.log('data deleted');
res.status(200).json({message:'person deleted sucessfully'})


} catch (error) {
  console.log('error');
    res.status(500).json({error:'not found '})
    
      
}
})

module.exports =router;
