function add(number) {
    if (number <= 0) {
      return 0;
    } else {
      return number + add(number - 1);
    }
  }
console.log(add(23))
  