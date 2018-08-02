function largestNum(arr){
    let maxnum =0;
for (let el of arr){
 if (el > maxnum){
     maxnum = el;
 }

}
// don't call a function inside a function
return maxnum;
}