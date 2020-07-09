let items = [];
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

function deleteItem(event) {
  const parent = event.target.parentNode;
  const position = parent.getAttribute("data-position");
  items.splice(position, 1);
  parent.remove();
}

// TODO: Write tests for this function
function createItem(items) {
  items.forEach((item, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.setAttribute("data-position", index);
    let p = document.createElement("p");
    p.innerText = item;
    itemDiv.appendChild(p);

    const editIcon = document.createElement("i");
    editIcon.className = "fa fa-pencil";
    itemDiv.appendChild(editIcon);

    editIcon.addEventListener("click", function (event) {
      const item = event.target.parentElement;
      const textArea = item.querySelector("p");

      if (textArea.getAttribute("contenteditable") === "true") {
        textArea.setAttribute("contenteditable", "false");
      } else {
        textArea.setAttribute("contenteditable", "true");
      }
    });

    const deleteIcon = document.createElement("i");
    deleteIcon.className = "fa fa-times-circle";
    itemDiv.appendChild(deleteIcon);
    deleteIcon.addEventListener("click", deleteItem);
    results.appendChild(itemDiv);
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
