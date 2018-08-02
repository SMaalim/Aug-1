function marchingSet(arr1, arr2) {
    let result = [];
    for (let el of arr1){
      if (arr2.includes(el)){
        if (!result.includes(el)){
          result.push(el);
        }  

      }  
        
    } ;
    console.log(result)
    return result;
  }

  marchingSet([1, 2, 7],[3, 4, 5])