//Exercise 10: Use else block to display a message “Done” after successful execution of for loop

//For example, the following loop will execute without any error.
/* for i in range(5):
            print(i)

            */

for (let i = 0; i <= 5; i++) {
  if (i == 5) {
    console.log("Done!");
  } else {
    console.log(i);
  }
}

/* Expected output:
            0
            1
            2
            3
            4
            Done!
            */
