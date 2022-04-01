// The Big O to this code is O(n^2) or O(n * n).
const wordPairs = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(`${arr[i]} ${arr[j]}`);
    }
  }
};
wordPairs(['ball', 'buggy', 'bean']);

//The Big O to this code is O(n * m). This because the outer loop iterates over array of length n while the inner loop iterates over array of length m.
const wordPairsV2 = (arr, arr2) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      console.log(`${arr[i]} ${arr2[j]}`);
    }
  }
};
wordPairsV2(['ball', 'buggy', 'bean'], ['crisp', 'cabbage', 'cup', 'cobol']);

// IDENTIFYING RUNTIME COMPLEXITY (RULES OF THUMB)
//  *** Remember to check on what conditions the for loop runs on. ***

// 1. Iterating over a collection (array) OR using n as a pointer with a for loop = O(n)
// 2. Iterating over the same collection with nested for loops = O(n^2) or O(n * n)
// 3. Iterating over different collection with nested for loops = O(n * m)
