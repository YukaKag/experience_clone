function pow(x, y) {
   if (y < 0) {
    return
  }
  if (y === 0) {
    return 1;
  }
  let result = x;
  for (let i = 1; i < y; i++) {
    result *= x;
  }
  return result;
}
console.log(pow(2, 3)); //    - консоль виведе 8 бо 2 в третій тепені - 8
console.log(pow(5, 8)); //   - консоль виведе 390625
console.log(pow(1, 2)); //   - консоль виведе 1
console.log(pow(7, 0)); //   - консоль виведе 1  бо любе число в ступені 0 буде 1
