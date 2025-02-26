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
  