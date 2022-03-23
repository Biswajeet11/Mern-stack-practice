/*https://stackoverflow.com/questions/9959727/proto-vs-prototype-in-javascript */


function Foo(y){
    this.y = y;
}

/*
    Foo.prototype points to function prototype
    object – any properties added to this
    function prototype object are available
    to objects created from Foo 
*/

Foo.prototype.x = 10;


Foo.prototype.calculate = function(z){
    return this.x + this.y + z;
}

var b = new Foo(20);
var c = new Foo(30);

b.calculate(30) // 60
c.calculate(40) // 80


/*__proto__ provides inheritance only between object instances */

console.log(b.__proto__ === Foo.prototype) // true
console.log(c.__proto__ === Foo.prototype) // true
console.log(b.constructor === Foo) // true
console.log(c.constructor === Foo) // true
console.log(Foo.prototype.constructor === Foo) // true


console.log(b.calculate === b.__proto__.calculate) // true

console.log(b.__proto__.calculate === Foo.prototype.calculate) // true