//Exercise 5: Display numbers from a list using loop

// The number must be divisible by five
// If the number is greater than 150, then skip it and move to the next number
// If the number is greater than 500, then stop the loop

numbers = [12, 75, 150, 180, 145, 525, 50];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 5 == 0) {
    if (numbers[i] > 500) {
      break;
    }
    {
      if (numbers[i] > 150) {
        continue;
      }
      console.log(numbers[i]);
    }
  }
}

/* Expected output:
         75
        150
        145
        */
