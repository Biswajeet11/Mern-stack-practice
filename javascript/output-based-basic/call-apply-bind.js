

var person = {
    name:"coder",
    hello: function(thing){
        console.log(this.name+ " says hello " + thing)
    },
}

person.hello("world"); // coder says hello world


var alterEgo = {
    name : "Coder 2 "
}

person.hello.call(alterEgo,"world") // Coder 2  says hello world

person.hello.apply(alterEgo,["world"]) // Coder 2  says hello world


const newhello = person.hello.bind(alterEgo);
console.log(newhello("new world")) // Coder 2  says hello new world