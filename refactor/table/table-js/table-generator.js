const table_generator = () => {
  let body = document.getElementsByTagName("body")[0];

  let tbl = document.createElement("table");
  let tblBody = document.createElement("tbody");

  for (let i = 0; i < 10; i++) {
    let row = document.createElement("tr");

    for (let j = 0; j < 10; j++) {
      let cell = document.createElement("td");
      let cellText = document.createTextNode("row: " + i + ", column: " + j);
      // attach each text node to its parent <td> element
      cell.appendChild(cellText);
      // attach each <td> element to its parent <tr> element
      row.appendChild(cell);
    }

    // attach each <tr> element to the parent <tbody> element
    tblBody.appendChild(row);
  }

  // attach the <tbody> element to its parent <table> element
  tbl.appendChild(tblBody);
  // attach the <table> element to its parent <body> element
  body.appendChild(tbl);
  tbl.setAttribute("border", "2");
};
