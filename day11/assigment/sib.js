//Problem 1: Student Management System
const student = {
    name: "Aryan Kumar",
    rollNumber: 101,
    marks: {
      Math: 80,
      Science: 65,
      English: 50,
      History: 70
    },
    getAverageMarks: function() {
      let total = 0;
      let subjects = Object.keys(this.marks).length;
  
      for (let subject in this.marks) {
        total += this.marks[subject];
      }
      
      return total / subjects;
    },
    checkPassOrFail: function() {
      return this.getAverageMarks() > 40 ? "Passed" : "Failed";
    }
  };
  
  console.log(student.getAverageMarks()); // Output: 66.25
  console.log(student.checkPassOrFail()); // Output: "Passed"

  
  //Problem 2: Library System
  const library = {
    books: {
      "Atomic Habits": { author: "James Clear", availableCopies: 3 },
      "The Alchemist": { author: "Paulo Coelho", availableCopies: 5 }
    },
    borrowBook: function(bookName) {
      if (this.books[bookName] && this.books[bookName].availableCopies > 0) {
        this.books[bookName].availableCopies--;
      } else {
        console.log("Book not available.");
      }
    },
    returnBook: function(bookName) {
      if (this.books[bookName]) {
        this.books[bookName].availableCopies++;
      }
    }
  };
  
  library.borrowBook("Atomic Habits");
  console.log(library.books["Atomic Habits"].availableCopies); // Output: 2


//Problem 3: Generate Multiplication Table  
function generateTable(num, limit) {
    for (let i = 1; i <= limit; i++) {
      console.log(`${num} x ${i} = ${num * i}`);
    }
  }
  
  generateTable(5, 10);

  
  //Problem 4: FizzBuzz
  function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
      } else if (i % 3 === 0) {
        console.log("Fizz");
      } else if (i % 5 === 0) {
        console.log("Buzz");
      } else {
        console.log(i);
      }
    }
  }
  
  fizzBuzz(15);

  //Problem 5: Reverse a String Without Using .reverse()
  function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
  
  console.log(reverseString("JavaScript")); // Output: tpircSavaJ

  


  //Problem 6: Remove Duplicates from an Array
  function removeDuplicates(arr) {
    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (!uniqueArr.includes(arr[i])) {
        uniqueArr.push(arr[i]);
      }
    }
    return uniqueArr;
  }
  
  console.log(removeDuplicates([1, 2, 3, 2, 4, 5, 1, 6])); // Output: [1, 2, 3, 4, 5, 6]

  
  //Problem 7: Find the Longest Word in a Sentence
  function longestWord(sentence) {
    let words = sentence.split(" ");
    let longest = "";
  
    for (let word of words) {
      if (word.length > longest.length) {
        longest = word;
      }
    }
  
    return longest;
  }
  
  console.log(longestWord("Coding is amazing and challenging")); // Output: "challenging"

  
  //Problem 8: Custom .map() Method
  function myMap(arr, callback) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr.push(callback(arr[i]));
    }
    return newArr;
  }
  
  function myCallback(x) {
    return x * 2;
  }
  
  console.log(myMap([1, 2, 3, 4], myCallback)); // Output: [2, 4, 6, 8]

  
  //function firstUniqueCharacter(str) {
  let charCount = {};

  // Count occurrences of each character
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first character with count 1
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null; // If no unique character found


console.log(firstUniqueCharacter("aabbcddce")); // Output: "e"


//Problem 10: Find Pairs that Sum to a Target
function findPairs(arr, target) {
  let pairs = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        pairs.push([arr[i], arr[j]]);
      }
    }
  }

  return pairs;
}

console.log(findPairs([2, 4, 3, 5, 7, 8, 9], 10)); 


//Problem 11: Implement a Stack
class Stack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    this.stack.push(value);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack.length > 0 ? this.stack[this.stack.length - 1] : null;
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}

// Example usage:
let myStack = new Stack();
myStack.push(10);
myStack.push(20);
console.log(myStack.pop()); // Output: 20
console.log(myStack.peek()); // Output: 10
console.log(myStack.isEmpty()); // Output: false




  