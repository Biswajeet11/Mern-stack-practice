// // // Const val =6;

// // // Function b(){
// // // console.log(val)

// // // } b()

// // // Const obj1 = {
// // // name: “name”,
// // // fn(){
// // // Return “func”
// // // }

// // // Const obj2 ={
// // //  “age”:12,

// // // __proto__: obj1

// // // }

// // function reference(obj) {
// //   obj.val = "val";
// //   console.log(obj);
// // }

// // let obj = { val: "new Val" };

// // reference(obj);
// // console.log("obj", obj);

// function passByValue(val){

//   return val
// }

// passByValue(10);

const p = {
  name:"name",
  func: function(){
    return this
  }
}

var firstPlayer = {
    name: "mario",
    dressColor: "red",
    lives: 3,
    oneUp() {
      // console.log("1");
      // 50 lines of essential manipulation
      this.lives++;
    }
  };
  
  var secondPlayer = {
    lives: 5,
    onUp() {
      // console.log("this", this);
      let ref = firstPlayer.oneUp.bind(this);
      ref();
    }
  };
  secondPlayer.onUp();
  
  console.log(secondPlayer.lives);
  
  