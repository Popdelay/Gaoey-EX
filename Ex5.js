//Exercise 5: Display numbers from a list using loop

// The number must be divisible by five
// If the number is greater than 150, then skip it and move to the next number
// If the number is greater than 500, then stop the loop

// GAOEY - ให้มีการประกาศประเภทตัวแปรด้วยทุกครั้ง เช่น let numbers = []
numbers = [12, 75, 150, 180, 145, 525, 50];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 5 == 0) {
    if (numbers[i] > 500) {
      break;
    }
    // GAOEY - ไม่จำเป็นต้องมี bucket ซ้อน
    {
      if (numbers[i] > 150) {
        continue;
      }
      console.log(numbers[i]);
    }
  }
}

// GAOEY - ในหลายๆครั้งการทำ nested if ทำให้บรรทัด code เพิ่ม เราสามารถทำให้มัน simply ขึ้นได้แบบนี้ ด้วยการกำหนดตัวแปรให้ readable

// for (let i = 0; i < numbers.length; i++) {
//   let current_number = numbers[i];
//   let is_divided_by_five = current_number % 5 == 0;
//   let is_more_than_500 = current_number > 500;
//   let is_more_than_150 = current_number > 150;

//   if (is_divided_by_five && is_more_than_500) {
//     break;
//   }
//   if (is_divided_by_five && is_more_than_150) {
//     continue;
//   }

//   if (is_divided_by_five) {
//     console.log(current_number);
//   }
// }

/* Expected output:
         75
        150
        145
        */
