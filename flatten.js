function flatten(elements) {
    let result=[];
    flattening(0,elements,result);

    return result;
}

function flattening(i,elements,result){
    
    if(i===elements.length){
        return;
    }

    if(Array.isArray(elements[i])){

        flattening(0,elements[i],result);

    }else{

        result.push(elements[i]);

    }

    flattening(i+1,elements,result);

}
module.exports = flatten;