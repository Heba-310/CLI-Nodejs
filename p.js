

// const data=require("./prac.js")



// const yargs=require("yargs/yargs");
// const {hideBin}=require("yargs/helpers");
// const { describe, demandOption } = require("yargs");
// const argv =yargs(hideBin(process.argv))
// .command({
//   command:"add",
//   describe :"to add",
//   builder : {
//     fname:{
//       describe:"name",
//       demandOption:true,
//       type:"string"

//     },
//     lname:{
//       describe:"name2",
//       demandOption:true,
//       type:"string"

//     }
//   },
//   handler:(t)=>{
// console.log("succeed add", t.fname , t.lname)
// data.add(t.fname , t.lname)

//   }
// })
// .argv

// 1- The user enters the data of 10 people (id,first name,last name, age and city)
// 2- The user can view the data of all people or view the data of a specific person
// 3- The user can delete all people or delete a specific person
// 4- the user can view full name (first name + last name) and the city of each person
 const data=require("./prac.js")
const yargs=require("yargs")

yargs.command({
command:"add",
describtion:"To add Data",
builder:{
firstName:{
describe:"first name",
demandOption: true,
type:"string"

},
LastName:{
describe:"Last name",
demandOption: true,
type:"string"

},
Age:{
describe:"Age",
demandOption: true,
type:"string"

},
City:{
describe:"City",
demandOption: true,
type:"string"

},
ID:{
describe:"ID",
demandOption: true,
type:"string"

}


},
handler:(arg)=>{ 
  data.add( arg.firstName,
    arg.LastName,
    arg.ID,
    arg.City,
    arg.Age )

}



})

yargs.command({
command:"list",
describtion:"To list Data",


handler:()=>{ 
  data.list( )
   
}



})

yargs.command({
command:"delete",
describtion:"To delete Data",
builder:{

ID:{
describe:"ID",
demandOption: true,
type:"string"

}


},
handler:(arg)=>{
  data.delet(arg.ID )

}

})
yargs.command({
command:"search",
describtion:"To search Data",
builder:{

ID:{
describe:"ID",
demandOption: true,
type:"string"

}



},
handler:(arg)=>{
  data.search(arg.ID )

}

})

yargs.command({
  command:"clear",
  describtion:"To clear Data",
  handler:()=>{
  data.clear()

}

})
yargs.command({
  command:"view",
  describtion:"To view Data",
  handler:()=>{
  data.view()

}

})
yargs.argv

















































































