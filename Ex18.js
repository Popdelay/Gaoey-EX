//Exercise 18: Print the following pattern

/* Exercise 18: Print the following pattern
Write a program to print the following start pattern using the for loop */

function myStart(num) {
  for (let i = 1; i <= num; i++) {
    console.log(`* `.repeat(i));
  }
  for (let x = num - 1; x >= 1; x--) {
    console.log(`* `.repeat(x));
  }
}

myStart(5);

/* Expected output:

* 
* * 
* * * 
* * * * 
* * * * * 
* * * * 
* * * 
* * 
*

*/
