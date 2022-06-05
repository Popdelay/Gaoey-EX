//Exercise 7: Print the following pattern

//Write a program to use for loop to print the following reverse number pattern

for (let i = 5; i >= 1; i--) {
  result = "";
  for (let j = i; j >= 1; j--) {
    result += j + " ";
  }
  console.log(result);
}

/* Expected output:
5 4 3 2 1 
4 3 2 1 
3 2 1 
2 1 
1
*/
