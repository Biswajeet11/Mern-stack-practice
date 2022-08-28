

function showText(text, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text);
        }, time)
    })
}

Promise.all([showText("hello", 1000), Promise.resolve("Hi")]).then((value) => {
    console.log(value)
})


function myPromisesAll(promises) {
    let result = [];
    return new Promise((resolve, reject) => {
        promises.forEach((promise, index) => {
            promise.then((p) => {
                result.push(p);
                if(index == promise.length-1){
                    resolve(result)
                }
            }).catch((err) => reject(err));
        })
    })
}


myPromisesAll([showText("hello", 1000), Promise.resolve("Hi"), Promise.reject("bye")]).then((value) => {
    console.log(value)
})


