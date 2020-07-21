import { updateItems } from "./data-utils";

export function createImportantIcon() {
  const importantIcon = document.createElement("i");
  importantIcon.className = "star fa fa-star";
  importantIcon.addEventListener("click", toggleImportantItem);
  return importantIcon;
}

export function createDeleteIcon() {
  const deleteIcon = document.createElement("i");
  deleteIcon.className = "delete fa fa-times-circle";
  deleteIcon.addEventListener("click", deleteItem);
  return deleteIcon;
}
export function toggleImportantItem(event) {
  const parent = event.target.parentNode;
  const position = parent.getAttribute("data-position");
  updateItems("important", position);
}

export function deleteItem(event) {
  const parent = event.target.parentNode;
  const position = parent.getAttribute("data-position");
  updateItems("delete", position);
}

export function itemDone(event) {
  const parent = event.target.parentNode;
  const position = parent.getAttribute("data-position");
  updateItems("complete", position);
}

export function createDoneIcon() {
  const doneIcon = document.createElement("i");
  doneIcon.className = "done fa fa-check-circle";
  doneIcon.addEventListener("click", itemDone);
  return doneIcon;
}

export function createEditIcon() {
  const editIcon = document.createElement("i");
  editIcon.className = "edit fa fa-pencil";

  editIcon.addEventListener("click", function (event) {
    // TODO: need to highlight the edit feature with styling
    const parent = event.target.parentNode;
    const position = parent.getAttribute("data-position");
    const text = window.prompt("enter new text");
    if (text) {
      updateItems("edit", { text, position });
    }
  });
  return editIcon;
}
