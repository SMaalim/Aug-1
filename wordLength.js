function wordLengths(sentence) {
    const words = sentence.split(' ');
    const result = {};
    for(let word of words) {
      result[word] = word.length;
    }
    return result;
  }
  
  
  
  
  
  wordLengths("Hello world");
  // { "Hello": 5, "world": 5 }
  