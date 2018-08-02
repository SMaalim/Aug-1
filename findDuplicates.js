function findDuplicates(arr){
    const newAr = [];
    const notIn =[];
   for (let el of arr){
       if (notIn.includes(el)){
     newAr.push(el);
 }
 else{
     notIn.push(el);
 }
} return newAr;
}
console.log(findDuplicates(['Bob', 'bob', 'Rob', 'Rob', 1, 2, 3, 4, 4]));
