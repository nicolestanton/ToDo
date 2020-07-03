const items = [];
const button = document.getElementById("submit");
const inputValue = document.getElementById("input");
const results = document.getElementById("todo-container");

// TODO: Write tests for this function
function inputValueIsValid(input) {
  if (input.trim().length === 0 || input.trim() === "") {
    return false;
    // return now so the function doesnt get executed any further
  }
  return true;
}

// TODO: Write tests for this function
function createItem(items) {
  items.forEach((item) => {
    let p = document.createElement("p");
    p.innerText = item;
    results.appendChild(p);
    let deleteItem = document.createElement("span");
    deleteItem.innerText = "delete";
    results.appendChild(deleteItem);

    deleteItem.addEventListener("click", function () {
      results.removeChild(p);
      results.removeChild(deleteItem);
      items.pop();
    });
  });
}

button.addEventListener("click", function () {
  const input = inputValue.value;

  if (!inputValueIsValid(input)) {
    alert("Enter a valid item");
    return;
  }

  items.push(input);

  results.innerHTML = "";

  createItem(items);
  console.log(items);
});
