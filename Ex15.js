//Exercise 15: Use a loop to display elements from a given list present at odd index positions

my_list = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// GAOEY ผิดจุดประสงค์ของโจทก์นี้ ต้องเช็คแต่ละ index ว่าเป็น EVEN, หรือ ODD
// for (let i = 0; i < my_list.length; i++) {
//   check odd number, ถ้าเป็น even i % 2 == 0
//   if (i % 2 == 1) {
//     console.log(my_list[i]);
//   }
// }

for (let i = 0; i < my_list.length; i++) {
  console.log(my_list[i + 1]);
  i++;
}

/*Expected output:
20
40
60
80
100
*/
