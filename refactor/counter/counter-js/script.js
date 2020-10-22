let count = 0;
function increamentAmount(amt) {
  if (document.getElementById("add"+amt)) {
    count += amt;
    document.getElementById("output").value = count;
  };
};

// closure is not applicabe at this stage
function addAmount(amt) {
  return count+amt;
};
const addOne = addAmount(1);
const addFive = addAmount(5);
const addTen = addAmount(10);
const addHundred = addAmount(100);
console.log(addOne, addFive, addTen, addHundred);

// from four different functions to a general funciton
// function incrementOne() {
//   if (document.getElementById("add1")) {
//     count += 1;
//     document.getElementById("output").value = count;
//   };
// };
// function incrementFive() {
//   if (document.getElementById("add5")) {
//     count += 5;
//     document.getElementById("output").value = count;
//   };
// };
// function incrementTen() {
//   if (document.getElementById("add10")) {
//     count += 10;
//     document.getElementById("output").value = count;
//   };
// };
// function incrementOneHundred() {
//   if (document.getElementById("add100")) {
//     count += 100;
//     document.getElementById("output").value = count;
//   };
// };