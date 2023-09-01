const items = [1, 2, 3, 4, 5, 5];

const filter=require("./filter.js");

const newItems=filter(items,(item)=>{
    return item%2 != 0;
})
console.log(newItems);