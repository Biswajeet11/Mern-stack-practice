var a = {};
var b = {key:'b'};
var c = {key:'c'};

a[b] = 100;
a[c] = 200;


console.log(a.toString())  // [object Object]

console.log(a[b].toString()) // "200"

console.log(a[b]);  // 200