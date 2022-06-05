//Exercise 13: Find the factorial of a given number

/* Write a program to use the loop to find the factorial of a given number.
        The factorial (symbol: !) means to multiply all whole numbers from the chosen number down to 1. 

        For example: calculate the factorial of 5
        5! = 5 × 4 × 3 × 2 × 1 = 120
        */

let num = 5;
let sum = 1;

for (let i = num; i >= 1; i--) {
  console.log(i, "! =", sum, " x", i, " =", (sum *= i));
}

console.log("Output = ", sum);

// Expected output:
// 120
