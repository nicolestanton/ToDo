const items = [];
const button = document.getElementById("submit");
let inputValue = document.getElementById("input");
const results = document.getElementById("todo-container");

function addTask() {
  const input = inputValue.value;
  var li = document.createElement("li");
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  li.innerHTML = input;
  results.appendChild(li);
  results.appendChild(checkbox);
}

button.addEventListener("click", addTask);

//on click get input value and push into items array

//for each item create element of span with checkbox
