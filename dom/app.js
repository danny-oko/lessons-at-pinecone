const mainEl = document.getElementById("dom-el");

let listElement = `<h1>Grocery List</h1>`;

const listArr = ["1", "2", "3", "4", "5"];

let ul = "<ul>";

for (let i = 0; i < listArr.length; i++) {
  const eachItems = listArr[i];
  const elements = `<li>${eachItems}</li>`;

  ul += elements;
}
ul += "</ul>";

listElement += ul;

document.body.innerHTML = listElement;

