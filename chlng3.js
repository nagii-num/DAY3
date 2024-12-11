function filterInvalidItems(arr){
    return arr.filter(item => typeof item !== 'boolean');
}

inputarray  = ["a","d",1,true,"cd",33];
result = filterInvalidItems(inputarray);
console.log(result);



/*function filterInvalidItems(arr){
    return arr.filter(item => typeof item !== 'number');
}

inputarray1  = ["a","d",1,true,"cd",33];
result = filterInvalidItems(inputarray1);
console.log(result);*/



/*function filterInvalidItems(arr){
    return arr.filter(item => typeof item !== 'string');
}

inputarray2  = ["a","d",1,true,"cd",33];
result = filterInvalidItems(inputarray2);
console.log(result);*/

