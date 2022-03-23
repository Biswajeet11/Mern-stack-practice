/* hoisting  */

var a = 2;
function abc(){
    // var a;
    console.log(a); //undefined
    // a =10
    var a = 10;
}
abc();
 
/* --------------- */

/*https://www.jpassion.com/category/16-javascript-jquery-ajax-programming?download=678 */

var a = {
    x: 10,
    calculate : function(z){
        return this.x + this.y + z;
    }
}

var b = {
    y: 20,
    __proto__:a   // __proto__ is a pointer  this points to variable a 
}

var c = {
    y: 30,
    __proto__:a
}
// called the inherited method
console.log(b.calculate(30)); //60
console.log(c.calculate(40))  //80


var animal = {
    eats: true,
    walk: function(){
        console.log("Animal walks")
    }
};

var turtle = { 
    jumps : false,
    __proto__ : animal
}

console.log(turtle.walk());  // animal walk

var rabbit = { 
    jumps : true,
    walk: function(){
        console.log("Rabbit walk")
    },
    __proto__ : animal
}

console.log(rabbit.walk())  // overrides walk method