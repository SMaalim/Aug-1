function printMulti(myArray){
    for(let element of myArray) {
        if (Array.isArray(element)) {
            for(let e of element) {
              console.log(e)
            }
        } else {
            console.log(element)
        }
    }
      
}