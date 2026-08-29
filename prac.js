
const { log } = require("console")
const fs=require("fs")



const add=(first,last,id,city,age)=>{
const dataStored=data()
const dub=dataStored.filter((ele)=>{
     return ele.id==id })

     if(dub.length==0){
dataStored.push({
firstName:first,
LastName:last,
age:age,
city:city,
id: id
})
     
Save(dataStored)

     }else{
        console.log("error data");
        
     }
}
const list = () => {
  const dataStored = data()

  dataStored.forEach((ele) => {
    console.log(ele.firstName + " " + ele.LastName + " " + ele.city)
  })
}

const delet=(id)=>{
const dataStored=data()
const del=dataStored.filter((ele)=>{
     return ele.id!==id })
     Save(del)
     console.log(del)


}
const clear=()=>{
    const cl=[]
    Save(cl)

}
const search =(id)=>{
    const dataStored=data()
    const find=dataStored.find((ele)=>{return ele.id==id})
    if(find){
    console.log(find)
    }else{
        console.log("not found");
        
    }

}
const view =()=>{
    const dataStored=data()
  

    if(dataStored.length!==0){
    dataStored.forEach(element => {
        console.log(element) ;
        
    });
    }else{
        console.log("data is empty");
        
    }

}

data=()=>{
    try{
    const j=fs.readFileSync("data.json").toString()
    return JSON.parse(j)
    }
    catch{
        return []
    }
}
Save=(dataStored)=>{
const ob = JSON.stringify(dataStored)
fs.writeFileSync("data.json",ob)

}
module.exports={
    add:add,
    delet:delet,
    clear:clear,
    search:search,
    view:view,
    list:list
}