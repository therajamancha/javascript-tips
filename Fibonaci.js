// function calling it self
const fibonacci = (num1,num2,lenght) => {
  if(!lenght)return
  console.log(num1);
  return fibonacci(num2,(num1 + num2),--lenght);
}

fibonacci(0, 1, 10);