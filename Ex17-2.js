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
      new_sum + calculate_recursive(numb, total, current_index + 1, new_sum)
    );
  }
}

// unit test
console.log("2 + 22 + 222 + 2222 + 22222 = 24690 is ", summation(2, 5));
console.log(
  "2 + 22 + 222 + 2222 + 22222 = 24690 is ",
  calculate_recursive(2, 5, 0, 0)
);
