// way 1
let accumulator = 0;
function add(value) {
  if (value) {
    accumulator += value;
    return add;
  } else {
    return accumulator;
  }
}

console.log("way 1: expected value 36. result =", add(2)(5)(7)(1)(6)(5)(10)()); // 36

// way 2
function add2(value, accumulator = 0) {
  if (value) {
    accumulator += value;
    return function (value) {
      return add2(value, accumulator);
    }
  } else {
    return accumulator;
  }
}

console.log("way 2: expected value 36. result =", add2(2)(5)(7)(1)(6)(5)(10)()); // 36