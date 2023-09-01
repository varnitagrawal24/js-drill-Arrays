const nestedArray = [1, [2], [[3]], [[[4]]]];

const flatten=require("./flatten.js");

const result= flatten(nestedArray);

console.log(result);