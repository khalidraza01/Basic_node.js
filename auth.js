
const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
const person = require("./models/Person");

passport.use(new LocalStrategy(async (USERNAME,password,done)=>{
    try {
      const user= await person.findOne({username:USERNAME});
      if(!user){
        return done(null,false, {message:"incorrect username"});
      }
      const passwordFind= user.password===password ? true : false;
      if(passwordFind){
        return done(null,user);
      }
      else{
        return done(null,false ,{message:"incorrct Password"})
      }
      
    } catch (error) {
      return done(error)
      
    }
  
  }))
  localAuthMiddleware=passport.authenticate('local',{session:false})

  module.exports=passport;