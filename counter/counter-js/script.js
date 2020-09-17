let count = 0;
function incrementOne() {
  if (document.getElementById("add1")) {
    count += 1;
    document.getElementById("output").value = count;
  };
  // if (document.getElementById("add5")) {
  // 	count += 5;
  // 	document.getElementById("output").value = count;
  // };
  // if (document.getElementById("add10")) {
  // 	count += 10;
  // 	document.getElementById("output").value = count;
  // };
  // if (document.getElementById("add100")) {
  // 	count += 100;
  // 	document.getElementById("output").value = count;
  // };
};
function incrementFive() {
  if (document.getElementById("add5")) {
    count += 5;
    document.getElementById("output").value = count;
  };
};
function incrementTen() {
  if (document.getElementById("add10")) {
    count += 10;
    document.getElementById("output").value = count;
  };
};
function incrementOneHundred() {
  if (document.getElementById("add100")) {
    count += 100;
    document.getElementById("output").value = count;
  };
};