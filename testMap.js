const items = [1, 2, 3, 4, 5, 5];

const map=require("./map.js");

const newItems=map(items,(item)=>{
    return item*item;
})
console.log(newItems);