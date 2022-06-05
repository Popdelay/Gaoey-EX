//Exercise 14: Reverse a given integer number

/* Given: 76542
        
Expected output: 24567
*/
myList = "76542";
sum = "";

for (let i = myList.length - 1; i >= 0; i--) {
  sum += myList[i];
}
console.log(sum);
