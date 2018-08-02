function mergeSet(arr1, arr2){
    let result = [];
    for (let el1 of arr1){
        if (!(result.includes(el1))){
         result.push(el1);
        }
    }
    for (let el2 of arr2){
        if (!(result.includes(el2))){
         result.push(el2);
        }
    } 
    console.log(result);
    return result;
}
mergeSet([1, 2, 3],[3, 4, 5])