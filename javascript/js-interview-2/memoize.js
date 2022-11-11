function myMemoize(fn, context) {
    console.log("context", context)

    const res = {};
    return function (...args) {
        console.log("args", args)
        var argsCache = JSON.stringify(args);
        console.log("argsCache", argsCache)
        if (!res[argsCache]) {
            res[argsCache] = fn.call(context || this, ...args);
        }
        return res[argsCache]
    }
}

const sum = (a, b, c) => a + b + c;
const memoize = (cb, context) => {

    const res = {};
    return function (...args) {
        var argsCache = JSON.stringify(args);
        if (!res[argsCache]) {
            res[argsCache] = cb.call(context || this, ...args);
            console.log("executed")
        }
        console.log("cached")
        return res[argsCache]
    };
}
const memoizedSum = memoize(sum);
console.log(memoizedSum(1, 2, 3));
console.log(memoizedSum(1, 2, 3));

memoizedSum(1, 2, "3");
memoizedSum(1, 2, "3");

const obj1 = { a: 123 };

memoizedSum(obj1, 2, 3);
memoizedSum(obj1, 2, 3);

memoizedSum({ a: 123 }, 2, 3);
memoizedSum({ a: 123 }, 2, 3);

const product = (num1, num2) => {
    for (let i = 1; i <= 1000; i++) { }
    return num1 * num2;
}

console.time("first call")
console.log(product(9467, 7649))
console.timeEnd("first call")

const memoizeproduct = myMemoize(product);
const val = memoizeproduct(9467, 7649)

console.time("first call")
console.log(memoizeproduct(9467, 7649))
console.timeEnd("first call")
console.log(val)

