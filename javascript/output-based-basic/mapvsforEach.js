const arr = [1,2,3,4,5,6]
 
/*
Map creates a new array and returns the value

ForEach does not create a new array it can modify the existing array, it does not  return value

*/
const mapValue = arr.map((ele)=>{
    return ele+2;
})



const forEachValue = arr.forEach((ele, index )=>{
    arr[index] =  ele+3;
});



console.log("map array",mapValue) //  3, 4, 5, 6, 7, 8 ]

console.log("foreach array",forEachValue) // undefined

console.log("new Array after modified in forEach",arr) //  [ 4, 5, 6, 7, 8, 9 ]