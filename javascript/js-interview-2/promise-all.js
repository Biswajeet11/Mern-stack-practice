

function showText(text, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
             resolve(text);
        }, time)
    })
}

Promise.all([showText("hello",1000), Promise.resolve("Hi")]).then((value)=>{
    console.log(value)
})