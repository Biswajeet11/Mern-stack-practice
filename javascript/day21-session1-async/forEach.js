function myForEach(numbers, func) {
    for (let i = 0; i < numbers.length; i++) {
        func(numbers[i])
    }
}

myForEach([10, 20, 30], function (n) {
    console.log(n)
})

const fruits = ['apple', 'mango', 'chhikoo']

Array.prototype.myForEach = function (func) {
    for (let i = 0; i < this.length; i++) {
        func(this[i])
    }
}

fruits.myForEach(function (ele) {
    console.log(ele)
})

const users = [
    { id: 1, name: 'sam' },
    { id: 2, name: 'donna' }
]
users.myForEach(function (user) {
    console.log(user.id, user.name)
})

//fruits.first()  //return value at the first index
// users.first()

Array.prototype.first = function (func) {
    func(this[0])
}
fruits.first(function (fruit) {
    console.log(fruit)
})
users.first(function (user) {
    console.log(user)
})

Array.prototype.last = function (func) {
    func(this[this.length - 1])
}

fruits.last(function (fruit) {
    console.log(fruit)
})
users.last(function (user) {
    console.log(user)
})

//unique elements of a given array

// Array.prototype.unique=function(){
//    for(let i=0;i<this.length;i++)
// }