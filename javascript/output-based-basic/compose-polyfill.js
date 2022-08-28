
// we want to perform operation to multiplyFour then subtractTwo then addFive

function addFive(a) {
    return a + 5;
}

function subtractTwo(a) {
    return a - 2;
}


function multiplyFour(a) {
    return a * 4;
}

//  syntax of compose --> compose = (...fns) => (initialVal) => fns.reduceRight((val, fn) => fn(val), initialVal);

const compose = (...functions) => {
    console.log("...functions",...functions) //[Function: addFive] [Function: subtractTwo] [Function: multiplyFour]
    return (args) => {  
        console.log("args",args) //args 5
        return functions.reduceRight((arg,fn) => fn(arg),args);
    }
}

const evalute = compose(addFive,subtractTwo,multiplyFour);  // compose evaluates form right to left

console.log(evalute(5))