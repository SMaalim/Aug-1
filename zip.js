function zip(arr1, arr2){
    if(arr1.length!== arr2.length){
      return null;
    }else{
        // combine the first element of arr1 with arr2 
        // make it array
        const result = [];
        arr1.forEach(function(element,index){
            let narr = [];
            narr.push(element);
            narr.push(arr2[index]);
            result.push(narr);
        })
        return result;
    
         
        }
    }
    console.log(zip([1,2,3],[4,5,6]));
