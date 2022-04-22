// rest operator
const sum = (a,b,...args)=>{
  let total = 0;
  total = a + b;
  args.forEach(value => total += value)
  return total;
}
let getSum = sum(2,3,5,6,10,9,5,45);
console.log(getSum);