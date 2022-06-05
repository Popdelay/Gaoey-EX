//Exercise 2: Print the following pattern
//Write a program to print the following number pattern using a loop.

for (let i = 1; i < 7; i++) {
  result = "";
  for (let x = 1; x < i; x++) {
    result += x + " ";
  }
  console.log(result);
}

/* Expected output:
1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5
*/
