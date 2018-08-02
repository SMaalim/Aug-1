function clone(objA){
let newObj ={};
for (let a in objA){
    newObj[a] = objA[a];
}
    return newObj;
} 

