function apiCall1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const r = Math.round(Math.random() * 100)
            resolve(r)
        }, 1500)
    })
}

function apiCall1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const r = Math.round(Math.random() * 100)
            resolve(r)
        }, 500)
    })
}

Promise.all([apiCall1(), apiCall1()])
    .then((value) => {
        const [apiResult1, apiResult2] = value
        console.log('apiResult1 is', apiResult1)
        console.log('apiResult2 is', apiResult2)
    })
    .catch(err => console.log(err))