// 2 + 22 + 222 + 2222 + 22222 = 24690

// user view
function summation(numb, total) {
  let x = calculate_recursive(numb, total, 0, 0);
  return x;
}

// logic view
function calculate_recursive(numb, total, current_index, sum) {
  if (current_index === total) {
    return 0;
  } else {
    let digit = Math.pow(10, current_index);
    let new_sum = numb * digit + sum;
    return (
      new_sum - calculate_recursive(numb, total, current_index + 1, new_sum)
    );
  }
}

// new_sum
// 2 + calculate_recursive(2, 5, 1, 2);
// 22 + calculate_recursive(2, 5, 2, 22);
// 222 + calculate_recursive(2, 5, 3, 222);
// 2222 + calculate_recursive(2, 5, 4, 2222);
// 22222 + calculate_recursive(2, 5, 5, 22222);

// unit test
console.log("2 + 22 + 222 + 2222 + 22222 = 24690 is ", summation(2, 5));
console.log(
  "2 + 22 + 222 + 2222 + 22222 = 24690 is ",
  calculate_recursive(2, 5, 0, 0)
);
