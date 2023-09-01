const items = [1, 2, 3, 4, 5, 5];

const find=require("./find.js");

const newItem=find(items,(item)=>{
    return item===6;
})
console.log(newItem);