//Exercise 17: Find the sum of the series upto n terms

/* Exercise 17: Find the sum of the series upto n terms
Write a program to calculate the sum of series up to n term. 
For example, if n =5 the series will become 2 + 22 + 222 + 2222 + 22222 = 24690

Given:
# number of terms
n = 5
*/

let n = 5;

function partA(num) {
  let sum = 0;
  let x = "";
  for (i = 1; i <= num; i++) {
    x += 2;
    sum += parseInt(x);
  }
  return sum;
}

console.log(partA(n));

//Expected output:
//24690
