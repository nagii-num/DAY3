function Occuranceword(sentence, word) {

    let wordsArray = sentence.toLowerCase().split(/\W+/);
    
    let count = wordsArray.filter(w => w === word.toLowerCase()).length;
    
    return count;
  }
  
  sentence = "be kind whenever possible.kindness is what matters , kind";
  word = "kind";
  occurrences = Occuranceword(sentence, word);
  console.log(occurrences); 
  