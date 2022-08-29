//1.


console.log("a");
setTimeout(()=>console.log("set"),0);
Promise.resolve(()=>console.log("pro")).then((res)=>res());  // this is a micro task which 
                                                             // has higher priority so it will print before settimeout
console.log("b")

console.log("------------")
/* output
a
b
pro
set
*/

// 2.

setTimeout(function a() {console.log("a")}, 1000);

setTimeout(function b() {console.log("b")}, 500);

setTimeout(function c() {console.log("c")}, 0);

function d() {console.log("d")}

d();
console.log("------------")
/* output
    c
    b
    a
 */



// 3.

// fetch('https://www.google.com')
//   .then(function a() {console.log("a")});

Promise.resolve()
  .then(function b() {console.log("b")});

Promise.reject()
  .catch(function c() {console.log("c")});

  /* output
   b
   c
   a
 */