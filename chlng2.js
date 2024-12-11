function splitaString(arr) {
    return arr.map(str => {
      let pairs = [];
      for (let i = 0; i < str.length; i += 2) {
        pairs.push(str.slice(i, i + 2));
      }
      return pairs;
    });
  }
  

  let array = ["numenticaui"];
  let result = splitaString(array);
  console.log(result); 
  
  

  


