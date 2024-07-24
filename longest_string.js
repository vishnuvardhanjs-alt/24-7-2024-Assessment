let a = "hello this is the longest_string";

let b = a.split(" ");

max = "";

for (i in b) {
  if (b[i].length > max.length) {
    max = b[i];
  }
}

console.log("Longest String is : " + max);
