const obj = {a: 1, b: 2, c: 3, d: 4};

for(let key in obj) {
  console.log(`key is ${key} and value is ${obj[key]}`);
}
const keys = [];

for(let key in obj) {
  keys.push(key);
}

console.log(keys);