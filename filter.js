function filter(elements, cb) {
    let result=[];
    if(Array.isArray(elements)){

        for(let i=0;i<elements.length;i++){
            if(cb(elements[i])){
                result.push(elements[i]);
            }
        }
    }

    return result;
}

module.exports = filter;