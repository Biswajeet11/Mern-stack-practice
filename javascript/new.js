// const arr = ["AwesomE", "ThIngs", "hAppEning", "HerE"]

// function totalCaps(a) {
//     // console.log(a)
//     const valueData = a.forEach((ele) => {
//         const element = ele.split('')
//          console.log(element)
//         const value = element.filter((el) => {
//             return el == el.toUpperCase()
//         })
//         console.log(...value)
//         return value
//     })
//     return valueData
// }

// totalCaps(arr)


// function totalCaps(a) {
//     // console.log(a)
//     a.forEach((ele) => {
//         const element = ele.split('')
//         console.log(element)
//         const value = element.filter((el) => {
//             return el == el.toUpperCase()
//         })
//         return value
//     })

// }
function printpattern(n){
    let k,j
    for (let i = 1; i <= n; i++) {
        for ( k = n - 1; k >= i; k--) {
            console.log(" ");
        }
        for ( j = 1; j <= 2 * k + 1; j++) {
            console.log('*');
    
        }
    
        console.log();
    
    }
}
printpattern(5)

