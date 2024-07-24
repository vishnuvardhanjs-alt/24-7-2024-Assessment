let a = [5, 3, 6, 2, 6, 1];

for (let i = 0; i < a.length; i++) {
  for (let j = 0; j < a.length; j++) {
    if (a[j] > a[i]) {
      let temp = a[i];
      a[i] = a[j];
      a[j] = temp;
    }
  }
}

console.log("Sorted List : " + a);
