const items = [];
const button = document.getElementById("submit");
const inputValue = document.getElementById("input");
const results = document.getElementById("todo-container");

// TODO: Write tests for this function
function inputValueIsValid(input) {
  if (input.trim().length === 0 || input.trim() === "") {
    alert("Enter a valid item");
    // return now so the function doesnt get executed any further
    return;
  }
}

// TODO: Write tests for this function
function createItem(items, el = "p") {
  items.forEach((item) => {
    let p = document.createElement(el);
    p.innerText = item;
    results.appendChild(p);
  });
}

button.addEventListener("click", function () {
  const input = inputValue.value;

  inputValueIsValid(input);

  items.push(input);

  results.innerHTML = "";

  createItem(items);
});
