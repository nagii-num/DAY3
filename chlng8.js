function numberToString(num){
      const digitToString = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
      return String(num).split('').map(digit => digitToString[parseInt(digit)]).join('');

}

inputnumber= (1);
result=numberToString(inputnumber);
console.log(result);

inputnumber= (98);
result=numberToString(inputnumber);
console.log(result);
