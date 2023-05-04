let voters = [
  ["John", true, 5],
  ["Jack", false],
  ["Jane", true, 3],
];

let person = prompt("Please enter your name", "John, Jack or Jane");
// John
if (person == "John") {
  let tb = document.createElement("table");
  let header = document.createElement("tr");
  let nm = document.createElement("th");
  nm.innerText = "Name";
  let votedQ = document.createElement("th");
  votedQ.innerText = "Has voted?";
  let forWhich = document.createElement("th");
  forWhich.innerText = "Candidate #";
  let rowOne = document.createElement("tr");
  let nameAr = document.createElement("td");
  nameAr.innerHTML = voters[0][0];
  let votingStat = document.createElement("td");
  votingStat.innerHTML = voters[0][1];
  let candid = document.createElement("td");
  candid.innerHTML = voters[0][2];
  header.append(nm, votedQ, forWhich);
  rowOne.append(nameAr, votingStat, candid);
  tb.append(header, rowOne);
  document.body.append(tb);
  //   ? STYLES
  tb.style.border = "1px solid black";
  nm.style.border = "1px solid black";
  nm.style.padding = "10px";
  nm.style.textAlign = "center";
  votedQ.style.border = "1px solid black";
  votedQ.style.padding = "10px";
  votedQ.style.textAlign = "center";
  forWhich.style.border = "1px solid black";
  forWhich.style.padding = "10px";
  forWhich.style.textAlign = "center";
  nameAr.style.border = "1px solid black";
  nameAr.style.padding = "10px";
  nameAr.style.textAlign = "center";
  votingStat.style.border = "1px solid black";
  votingStat.style.padding = "10px";
  votingStat.style.textAlign = "center";
  candid.style.border = "1px solid black";
  candid.style.padding = "10px";
  candid.style.textAlign = "center";
}
// Jack
else if (person == "Jack") {
  let tb = document.createElement("table");
  let header = document.createElement("tr");
  let nm = document.createElement("th");
  nm.innerText = "Name";
  let votedQ = document.createElement("th");
  votedQ.innerText = "Has voted?";

  let rowOne = document.createElement("tr");
  let nameAr = document.createElement("td");
  nameAr.innerHTML = voters[1][0];
  let votingStat = document.createElement("td");
  votingStat.innerHTML = voters[1][1];
  header.append(nm, votedQ);
  rowOne.append(nameAr, votingStat);
  tb.append(header, rowOne);
  document.body.append(tb);
  //   ? STYLES
  tb.style.border = "1px solid black";
  nm.style.border = "1px solid black";
  nm.style.padding = "10px";
  nm.style.textAlign = "center";
  votedQ.style.border = "1px solid black";
  votedQ.style.padding = "10px";
  votedQ.style.textAlign = "center";
  nameAr.style.border = "1px solid black";
  nameAr.style.padding = "10px";
  nameAr.style.textAlign = "center";
  votingStat.style.border = "1px solid black";
  votingStat.style.padding = "10px";
  votingStat.style.textAlign = "center";
}
// Jane
else if (person == "Jane") {
  let tb = document.createElement("table");
  let header = document.createElement("tr");
  let nm = document.createElement("th");
  nm.innerText = "Name";
  let votedQ = document.createElement("th");
  votedQ.innerText = "Has voted?";
  let forWhich = document.createElement("th");
  forWhich.innerText = "Candidate #";
  let rowOne = document.createElement("tr");
  let nameAr = document.createElement("td");
  nameAr.innerHTML = voters[2][0];
  let votingStat = document.createElement("td");
  votingStat.innerHTML = voters[2][1];
  let candid = document.createElement("td");
  candid.innerHTML = voters[2][2];
  header.append(nm, votedQ, forWhich);
  rowOne.append(nameAr, votingStat, candid);
  tb.append(header, rowOne);
  document.body.append(tb);
  //   ? STYLES
  tb.style.border = "1px solid black";
  nm.style.border = "1px solid black";
  nm.style.padding = "10px";
  nm.style.textAlign = "center";
  votedQ.style.border = "1px solid black";
  votedQ.style.padding = "10px";
  votedQ.style.textAlign = "center";
  forWhich.style.border = "1px solid black";
  forWhich.style.padding = "10px";
  forWhich.style.textAlign = "center";
  nameAr.style.border = "1px solid black";
  nameAr.style.padding = "10px";
  nameAr.style.textAlign = "center";
  votingStat.style.border = "1px solid black";
  votingStat.style.padding = "10px";
  votingStat.style.textAlign = "center";
  candid.style.border = "1px solid black";
  candid.style.padding = "10px";
  candid.style.textAlign = "center";
}
