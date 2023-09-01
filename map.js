function map(elements, cb) {
    let result=[];
    if(Array.isArray(elements)){

        for(let i=0;i<elements.length;i++){
            const val=cb(elements[i],i);
            result.push(val);
        }
    }
    return result;
}

module.exports = map;