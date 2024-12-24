const prop=require ('./notes.js');
const _=require('lodash')

let age=prop.age;
console.log(age);

let addnumber=prop.addnumber(age+10,10)
console.log("addition of a and b :"+ " " +addnumber);
let array=['khalid','khalid',1,2,3,1,2,3,1,2,3,'khalid']
var filter=_.uniq(array)
console.log(filter);
