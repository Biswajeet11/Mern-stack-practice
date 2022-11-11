const square = {
    side: 5,
    getArea: function () {
      return this.side * this.side;
    }
  };
  
  // console.log(square.getArea());
  
  const square1 = {
    side: 4
  };
  
  const d = square.getArea.bind(square1);
  
  // console.log(d());
  
  Function.prototype.myBind = function (obj, ...args) {
    const ref = this;
    return function () {
     return ref.apply(obj, [...args]);
    };
  };
  
  const newBind = square.getArea.myBind(square1);
  
  console.log(newBind());
  

  const square = {
    side: 5,
    getArea: function () {
      return this.side * this.side;
    }
  };
  
  console.log(square.getArea());
  
  let square1 = {
    side: 4
  };
  
  
  square.getArea.apply(square1);



  const arr = [1, 2, 3, 4, 5];

// [4,8];

const filterEven = arr.filter((num) => num % 2 === 0);

const filterMul = filterEven.map((val) => 2 * val);

console.log(filterMul);

Array.prototype.myFilter = function (cb, context) {
  let newArr = [];

  for (let i = 0; i < this.length; i++) {
    if (cb.call(context, this[i], i, this)) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};

const newFilterEven = arr.myFilter((num) => num % 2 === 0);

console.log("newFilterEven", newFilterEven);
