//Exercise 15: Use a loop to display elements from a given list present at odd index positions

my_list = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

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
