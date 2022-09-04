const a = "jjj"

{
    const a = "hhh";
    console.log(a)
}
console.log(a)

var b = "ttt";
function abc(){
   var b = "hnjj"
    console.log(b)
}
abc()

function test(){
    var x = "Bye";
    let y = "hello";
    
    if(true){
        let x = "hi";
        var y  = "uu"; //Error: Identifier 'y' has already been declared
        console.log(x);
        console.log(y);
    }
}

test()