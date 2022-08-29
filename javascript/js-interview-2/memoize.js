function myMemoize(fn,context) {
    console.log("context",context)
   
    const res = {};
    return function(...args) {
        console.log("args",args)
        var argsCache = JSON.stringify(args);
        console.log("argsCache",argsCache)
        if(!res[argsCache]){
            res[argsCache] = fn.call(context || this, ...args);
        } 
        return res[argsCache]
    }
}


const product = (num1,num2) => {
    for(let i = 1;i<=1000;i++){}
    return num1*num2;
}

console.time("first call")
console.log(product(9467,7649))
console.timeEnd("first call")

const memoizeproduct = myMemoize(product);
const val = memoizeproduct(9467,7649)

console.time("first call")
console.log(memoizeproduct(9467,7649))
console.timeEnd("first call")
console.log(val)

