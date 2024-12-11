function RepeatingCharacter(str) {
    let maxChar = '';
    let maxCount = 0;
    let currentChar = '';
    let currentCount = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === currentChar) {
        currentCount++;
      } else {
        if (currentCount > maxCount) {
          maxChar = currentChar;
          maxCount = currentCount;
        }
        currentChar = str[i];
        currentCount = 1;
      }
    }
  

    if (currentCount > maxCount) {
      maxChar = currentChar;
      maxCount = currentCount;
    }
  
    return { character: maxChar, count: maxCount };
  }
  

   inputString = "traaainngfornewbie";
   result = RepeatingCharacter(inputString);
  console.log(`Character: ${result.character}, Count: ${result.count}`);
  