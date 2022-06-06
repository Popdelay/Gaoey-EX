//Exercise 6: Count the total number of digits in a number

//Write a program to count the total number of digits in a number using a while loop.
//For example, the number is 75869, so the output should be 5.

numbers = "75869"; // GAOEY - ให้มีการประกาศประเภทตัวแปรด้วยทุกครั้ง เช่น let result = ""
let count = " "; // GAOEY - count เป็น integer ควรตั้งต้นด้วย 0 ไม่ใช้ string

while (count < numbers.length) {
  count++;
}
console.log(count);
