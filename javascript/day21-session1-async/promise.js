function generateRandom() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const random = Math.round(Math.random() * 100)
            if (random % 2 == 0) {
                resolve(random)
            }
            else {
                reject(random)
            }
        }, 1000)
    })
}
generateRandom()
    .then(function (even) {
        console.log('even', even)
    })
    .catch(function (odd) {
        console.log('odd', odd)
    })