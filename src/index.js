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

function importantItem(event) {
  let parent = event.target.parentNode;
  parent.classList.toggle("important");
  const position = parent.getAttribute("data-position");
  //remove starred item and insert at beginning try .splice
  if (parent.classList.contains("important")) {
    // console.log("parent", parent.className);
    const favouriteItem = items.splice(position, 1);
    favouriteItem[0].isImportant = true;
    items.unshift(favouriteItem[0]);
    // console.log("important items array", items);
    clearItems();
    createItem();
    console.log("parent improtant");
  } else if (parent.classList !== "item important") {
    favouriteItem[0].isImportant = false;
    console.log("parent not improtant");
  }
}

function clearItems() {
  results.innerHTML = "";
}

// TODO: Write tests for this function
function createItem() {
  items.forEach((item, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.setAttribute("data-position", index);
    itemDiv.classList.add("item");
    let p = document.createElement("p");
    p.innerText = item.item;
    itemDiv.appendChild(p);

    const starIcon = document.createElement("i");
    starIcon.className = "fa fa-star";
    itemDiv.appendChild(starIcon);
    starIcon.addEventListener("click", importantItem);
    results.appendChild(itemDiv);

    const editIcon = document.createElement("i");
    editIcon.className = "fa fa-pencil";
    itemDiv.appendChild(editIcon);

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

    const deleteIcon = document.createElement("i");
    deleteIcon.className = "fa fa-times-circle";
    itemDiv.appendChild(deleteIcon);
    deleteIcon.addEventListener("click", deleteItem);
    results.appendChild(itemDiv);
  });
}

button.addEventListener("click", function () {
  const input = inputValue.value;
  let itemsNew = {
    item: inputValue.value,
    isImportant: false,
  };

  if (!inputValueIsValid(input)) {
    alert("Enter a valid item");
    return;
  }

  items.push(itemsNew);

  clearItems();
  createItem();
  console.log("items", items);
});
