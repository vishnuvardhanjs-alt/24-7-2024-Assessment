let a = [1, 2, 3, 4, 5];

let min = 9999999;
let max = -999999;

for (let i = 0; i < a.length; i++) {
  if (a[i] < min) {
    min = a[i];
  }
  if (a[i] > max) {
    max = a[i];
  }
}

console.log("Min = " + min);
console.log("Max = " + max);
