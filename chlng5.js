function SumOfMultiples(num, count) {
    let sum = 0;
    
    for (let i = 1; i <= count; i++) {
      sum += num * i;
    }
  
    return sum;
  }
  
  let result1 = SumOfMultiples(3, 5);
  console.log(result1); 
  
  let result2 = SumOfMultiples(7, 3);
  console.log(result2); 
  
