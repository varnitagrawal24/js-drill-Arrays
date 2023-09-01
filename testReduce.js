const items = [1, 2, 3, 4, 5, 5];

const reduce=require("./reduce.js");

const result= reduce(items,(startingValue,item)=>{
    startingValue+=item;

    return startingValue;
},0);
console.log(result);