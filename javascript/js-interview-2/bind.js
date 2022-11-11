function f1() {
    console.log("this is", this);
    console.log("arguments is", arguments);
}
f1()

let f11 = f1.bind({a:1}, 'abc');
console.log("9999",f11('def'));
