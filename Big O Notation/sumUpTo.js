// The Big O to this code is 1 * n and to make it more efficient it would be better to use math to solve it.
const sumUpTo = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

// Always has 3 operations no matter how large (n) is hence being efficient.
const sumUpToV2 = (n) => {
  return (n * (n + 1)) / 2;
};

let t1, t2;

// Solution 1
t1 = Date.now();
sumUpTo(1000000000);
t2 = Date.now();
console.log(`${(t2 - t1) / 1000} seconds`);

// Solution 2
t1 = Date.now();
sumUpToV2(1000000000);
t2 = Date.now();
console.log(`${(t2 - t1) / 1000} seconds`);
