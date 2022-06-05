//Exercise 11: Write a program to display all prime numbers within a range

/* Note: A Prime Number is a number that cannot be made by multiplying other whole numbers. 
A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers

Given:
start = 25
end = 50
*/

function isPrime(num) {
  let count = 0;
  for (let i = 0; i <= num; i++) {
    if (num % i == 0) {
      count++;
    }
  }
  if (count == 2) {
    return true;
  } else {
    return false;
  }
}

function displayPrime(start, end) {
  for (let i = start; i <= end; i++) {
    if (isPrime(i) === true) {
      console.log(i);
    }
  }
}
displayPrime(25, 50);

/* Expected output:
Prime numbers between 25 and 50 are:
29
31
37
41
43
47

*/
