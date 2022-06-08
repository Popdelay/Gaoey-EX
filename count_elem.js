const input = [
  ["a", "b", "c"],
  ["c", "d", "f"],
  ["d", "f", "g"],
];

function count_elem(x) {
  let flat_input = x.flat();
  // ["a", "b", "c"] => {"a":xxx, "b":xxxx}
  let result = flat_input.reduce((obj, item) => {
    let count = obj[item] === undefined ? 0 : obj[item];
    let new_obj = { [item]: count + 1 };
    return { ...obj, ...new_obj };
  }, {});

  return result;
}

let result = count_elem(input);
console.log(result);
// unit test
console.log("a should equal 1 >> ", result.a == 1);
console.log("b should equal 1 >> ", result.b == 1);
console.log("c should equal 2 >> ", result.c == 2);
console.log("d should equal 2 >> ", result.d == 2);
console.log("f should equal 2 >> ", result.f == 2);
console.log("g should equal 1 >> ", result.g == 1);
