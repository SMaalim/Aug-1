function areValuesArrays(arr){
    for (let ar of arr){
      if (!Array.isArray(ar)){
        return false
      }
    } 
    return true;
}
    
