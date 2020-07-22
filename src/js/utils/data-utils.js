// anything dealing with the items array will be in this file

import {
  createImportantIcon,
  createDeleteIcon,
  createDoneIcon,
  createEditIcon,
} from "./utils";

// export let items = [];
export let items = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];
const results = document.getElementById("todo-container");
const itemCount = document.getElementById("item-count");

//actionType = edit, delete etc, payload = position of item we want to edit, delete etc
export function updateItems(actionType, payload) {
  if (actionType === "add") {
    const itemsNew = {
      item: payload,
      isImportant: false,
      isComplete: false,
    };

    if (!inputValueIsValid(payload)) {
      alert("Enter a valid item");
      return;
    }

    items.push(itemsNew);
  } else if (actionType === "important") {
    const favouriteItem = items.splice(payload, 1)[0];
    favouriteItem.isImportant = !favouriteItem.isImportant; //toggles the isImportant value when icon is clicked
    items.unshift(favouriteItem); // puts important item at the top of the list
  } else if (actionType === "delete") {
    items.splice(payload, 1);
    counter();
  } else if (actionType === "edit") {
    items[payload.position].item = payload.text;
  } else if (actionType === "complete") {
    const doneItem = items.splice(payload, 1)[0];
    doneItem.isComplete = !doneItem.isComplete;
    items.push(doneItem);
  }

  clearItems();
  localStorage.setItem("items", JSON.stringify(items));
  createItem();
}

function clearItems() {
  results.innerHTML = "";
}

// TODO: Write tests for this function
function inputValueIsValid(input) {
  if (input.trim().length === 0 || input.trim() === "") {
    return false;
    // return now so the function doesnt get executed any further
  }
  return true;
}

//create new div for item to go into
function createItemElement(important, complete, index) {
  const div = document.createElement("div");
  //toggles the important class in the html for styling because within the toggleImportant function clears the class

  if (important) {
    div.classList.add("important");
  }

  if (complete) {
    div.classList.add("complete");
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

// TODO: Write tests for this function
function createItem() {
  console.log("items", items);

  items.forEach((item, index) => {
    const itemDiv = createItemElement(item.isImportant, item.isComplete, index);
    itemDiv.appendChild(createItemText(item.item));
    itemDiv.appendChild(createImportantIcon());
    itemDiv.appendChild(createDeleteIcon());
    itemDiv.appendChild(createEditIcon());
    itemDiv.appendChild(createDoneIcon());

    results.appendChild(itemDiv);
    counter();
  });
}

function counter() {
  const count = items.length;
  itemCount.innerHTML = `You have ${count} things to do.`;
}
