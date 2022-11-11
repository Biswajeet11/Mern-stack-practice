// // // let const
// // // Arrow functions
// // // for of
// // // default parameters
// // // rest parameters
// // // Promises
// // // Class
// // // spread operator
// // // Map, reduce, filter, find
// // // module import

// // function add1(a,b,c) {
// // 	return a + b + c + 1;
// // }

// // function add2(b) {
// // 	return b + 2;
// // }

// // function add3(c) {
// // 	return c + 3;
// // }

const sum = (a, b, c) => a + b + c;
const memoize = (cb) => {
  let cache = {};

  return (...args) => {
    const x = args[0];
    const y = args[1];
    const z = args[2];
    if (x + y + z in cache) {
      console.log("Cache");
      return cache[x + y + z];
    } else {
      cache[x + y + z] = cb(x, y, z);
      console.log("Executed");
      return cache;
    }
  };
};
const memoizedSum = memoize(sum);
memoizedSum(1, 2, 3);
memoizedSum(1, 2, 3);

memoizedSum(1, 2, "3");
memoizedSum(1, 2, "3");

const obj1 = { a: 123 };

memoizedSum(obj1, 2, 3);
memoizedSum(obj1, 2, 3);

memoizedSum({ a: 123 }, 2, 3);
memoizedSum({ a: 123 }, 2, 3);

// Executed
// Cache

// Executed
// Cache

// Executed
// Cache

// Executed
// Executed

// // const compose = (func) => (x,...rest) => func.reduceRight((a,fn)=> (fn(a,...rest),x)

// // // console.log(add3(add2(add1(1,2,3))))

// // console.log(compose(add3,add2,add1)(1,2,3))

// console.log(1);

// setTimeout(() => {
//   console.log(2);
// }, 0);

// Promise.resolve(3).then(res => {
//     console.log(res);  //3
//     setTimeout(() => {
//       console.log(7);
//     }, 100);

//     setTimeout(() => {
//       console.log(8);
//     }, 0);
// });

// setTimeout(() => {
//   console.log(4);
// }, 100);

// setTimeout(() => {
//   console.log(9);
// }, 0);

// setTimeout(() => {
//   console.log(5);
// }, -100);

// console.log(6);

// 1 6 329847
