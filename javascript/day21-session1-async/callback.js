// javascript treats functions as first class citizens -allows us to assign
// functions to variables
// function expression
const greet=function(n){
    console.log(n)
}

//higher order function --sayhello
// if a function takes another function as an argument OR if a function
// returns another function then that function is called HOF
function sayHello(greet,name){
    setTimeout(()=>{
        greet(name)
    },2000);
}

sayHello(greet,'biswa')

sayHello(function(n){
    console.log('inline function',n)
},'msg')