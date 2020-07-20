const { IgnorePlugin } = require("webpack");

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

function toggleImportantItem(event) {
  const parent = event.target.parentNode;
  const position = parent.getAttribute("data-position");
  const favouriteItem = items.splice(position, 1)[0];
  favouriteItem.isImportant = !favouriteItem.isImportant; //toggles the isImportant value when icon is clicked
  items.unshift(favouriteItem); // puts important item at the top of the list
  clearItems();
  createItem();
}
function itemDone(event) {
  const parent = event.target.parentNode;
  const position = parent.getAttribute("data-position");
  const doneItem = items.splice(position, 1)[0];
  doneItem.isComplete = !doneItem.isComplete; //toggles the isImportant value when icon is clicked
  items.push(doneItem); // puts important item at the bottom of the list
  clearItems();
  createItem();
}

function clearItems() {
  results.innerHTML = "";
}

//create new div for item to go into
function createItemElement(important, index) {
  const div = document.createElement("div");
  //toggles the important class in the html for styling because within the toggleImportant function clears the class
  if (important) {
    div.classList.add("important");
  }
  if (isComplete === true) {
    div.classList.add("done");
  }

  div.setAttribute("data-position", index);
  div.classList.add("item");
  return div;
}

//create the text contents of the item
function createItemText(text) {
  const p = document.createElement("p");
  p.textContent = text; //text is defined within createItem function - item.item
  return p;
}

function createImportantIcon() {
  const importantIcon = document.createElement("i");
  importantIcon.className = "star fa fa-star";
  importantIcon.addEventListener("click", toggleImportantItem);
  return importantIcon;
}

function createDeleteIcon() {
  const deleteIcon = document.createElement("i");
  deleteIcon.className = "delete fa fa-times-circle";
  deleteIcon.addEventListener("click", deleteItem);
  return deleteIcon;
}

function createDoneIcon() {
  const doneIcon = document.createElement("i");
  doneIcon.className = "done fa fa-check-circle";
  doneIcon.addEventListener("click", itemDone);
  return doneIcon;
}

function createEditIcon() {
  const editIcon = document.createElement("i");
  editIcon.className = "edit fa fa-pencil";

  editIcon.addEventListener("click", function (event) {
    // TODO: need to highlight the edit feature with styling
    const item = event.target.parentElement;
    const textArea = item.querySelector("p");

    if (textArea.getAttribute("contenteditable") === "true") {
      textArea.setAttribute("contenteditable", "false");
    } else {
      textArea.setAttribute("contenteditable", "true");
    }
  });
  return editIcon;
}

// TODO: Write tests for this function
function createItem() {
  console.log("items", items);

  items.forEach((item, index) => {
    const itemDiv = createItemElement(item.isImportant, index);
    itemDiv.appendChild(createItemText(item.item));
    itemDiv.appendChild(createImportantIcon());
    itemDiv.appendChild(createDeleteIcon());
    itemDiv.appendChild(createEditIcon());
    itemDiv.appendChild(createDoneIcon());

    results.appendChild(itemDiv);
  });
}

button.addEventListener("click", function () {
  const input = inputValue.value;
  let itemsNew = {
    item: inputValue.value,
    isImportant: false,
    isComplete: false,
  };

  if (!inputValueIsValid(input)) {
    alert("Enter a valid item");
    return;
  }

  items.push(itemsNew);

  clearItems();
  createItem();
});
