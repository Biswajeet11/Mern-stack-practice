var a = null;
console.log(typeof null); // object

var b = undefined;
console.log(typeof b); // "undefined"
console.log(typeof typeof b); // string


var x = null;
var y = undefined;

if(x == y){
    console.log("yes")
}
else{
    console.log("no");
}

// output --> yes   they signify null values just the type are different

var x1 = [1,2,'hi', function(){console.log('function...')}]

x1[3](); //function...


var x2 = [1,3,2];  // js is call by reference the value will be stored in memory and x2 will be point to it
var y2 = x2;
x2.pop();

console.log(x2); //[ 1, 3 ]
console.log(y2); //[ 1, 3 ]


var x3 = [1,3,2]; 
var y3 = x3;
x3 = [];

console.log(x3); //[]
console.log(y3); //[ 1, 3, 2 ]


var x4 = [1,3,2]; 
var y4 = x4;
x4.length = 0

console.log(x4); //[]
console.log(y4); //[]


function Dog(name, breed){
    this.name = name;
    this.breed = breed;

    this.bark = function(){   // private function property  each instance will have a function copy
        console.log('bark...');
    }
}


// prototype is an object which is used for inheritence in JS Prototypical inheritence
// Dog.prototype.bark = function(){   // this is a public property based fucntion of Dog object
//     console.log('bark...')
// }

d = new Dog('pluto','labrador');
console.log(d);  //Dog { name: 'pluto', breed: 'labrador', bark: [Function (anonymous)] }
console.log(d.bark()) //bark...


function human(){
    console.log(arguments)  //[Arguments] { '0': 'name', '1': 'age' }
    console.log(typeof arguments)  //object
}

human("name","age")


console.log(typeof NaN) // number


console.log(NaN == NaN)  // false as they can be any type