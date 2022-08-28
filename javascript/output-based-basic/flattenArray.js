let arr = [
    [1, 2],
    [3, 4],
    [5, 6, [7, 8], 9],
    [10, 11, 12]
];


let flattened = [].concat(...arr); // flatten one layer 

console.log("flattened single layer", flattened) // [ 1, 2, 3, 4, 5, 6, [ 7, 8 ], 9, 10, 11, 12 ]

console.log("flattend 2 layers", arr.flat(2)) //[ 1,  2, 3, 4,  5, 6,  7, 8, 9, 10, 11, 12]

//flatten the array with 1 level
const customflat = ((arr, depth = 1) => {
    let result = [];

    arr.forEach((ele) => {
        if (Array.isArray(ele) && depth>0) {
            result.push(...customflat(ele, depth - 1))
        } else {
            result.push(ele)
        }
    });
    return result;
})

console.log("flatten the array with 1 level",customflat(arr)) // [ 1, 2, 3, 4, 5, [ 6, [ 7, 8 ], 9 ], 10, 11, 12 ]

const falttenAll = ((arr)=>{
    let result = []
    arr.forEach((ele)=>{
        if(Array.isArray(ele)){
            result.push(...falttenAll(ele));
        } else {
            result.push(ele)
        }
    })
    return result;
}) 

console.log("flatten the array with all level",falttenAll(arr))  // [ 1,  2, 3, 4,  5, 6,  7, 8, 9, 10, 11, 12]