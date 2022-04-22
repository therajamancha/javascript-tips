const curr = (a) => {
  return function(b) {
    return function (c){
      return a + b + c;
    }
  }
}

let one  = curr(2);

let two = one(3);

let three = two(5);

console.log(three);

// new Mwthod 
console.log(curr(2)(5)(7));
