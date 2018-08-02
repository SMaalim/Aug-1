function reverse(string){
   let newStr = string.split("");
   let newArray =[];
   for (let i = newStr.length -1; i >= 0; i--){
     newArray.push(newStr[i]);
   } return newArray.join('');
   
} 

console.log(reverse("Siyad"));