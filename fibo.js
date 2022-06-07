const input = 6;

function fibo(x) {
  let temp = Array(x).fill(0);
  let init_array = temp.map((v, index) => index + 1);
  let fibo = init_array.reduce((prev, curr) => prev * curr);

  return fibo;
}

// unit test
console.log("fibo(5) = 120 is ", fibo(5) === 120);
console.log("fibo(6) = 720 is ", fibo(6) === 720);
