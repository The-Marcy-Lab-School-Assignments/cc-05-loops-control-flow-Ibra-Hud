const multiplesOfSixAndNine = () => {
  for (let x = 1; x <= 100; x++) {
    if (x % 6 == 0 || x % 9 == 0) {
      console.log(x);
    }
  }
};

multiplesOfSixAndNine();

const greaterNum = (num1, num2, num3, num4) => {
  if (Number.isInteger(num1) && Number.isInteger(num2)) {
    if (num1 > num2) {
      return num1;
    } else if (num1 < num2) {
      return num2;
    } else {
      return "Both Numbers are Equal";
    }
  } else {
    return null;
  }
};

console.log(greaterNum("10", 7));
console.log(greaterNum(10, 7));

const sumOffFourAndSix = () => {
  let sum = 0;
  for (let x = 0; x <= 1000; x++) {
    if (x % 4 == 0 && x % 6 == 0) {
      sum += x;
    }
  }

  return sum;
};

console.log(sumOffFourAndSix());

const oddAndEvenToN = (int) => {
  for (let x = 0; x <= int; x++) {
    if (x % 2 == 0) {
      console.log(`${x} is even`);
    } else {
      console.log(`${x} is odd`);
    }
  }
};

oddAndEvenToN(5);

const sumOffNotDivisibleByTen = (num1, num2, num3, num4) => {
  let arr = [];
  arr.push(num1);
  arr.push(num2);
  arr.push(num3);
  arr.push(num4);

  let equal = 0;
  let highest = 0;
  for (x in arr) {
    if (x == arr[x + 1]) {
      equal++;
    }
  }

  for (x in arr) {
    highest = x;
    if (x < arr[x + 1]) {
      highest = arr[x + 1];
    }
  }

  return highest, equal;
};

console.log(sumOffNotDivisibleByTen());
