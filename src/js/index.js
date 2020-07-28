// const { IgnorePlugin } = require("webpack");
import { updateItems, items } from "../js/utils/data-utils";

const button = document.getElementById("submit");
const inputValue = document.getElementById("input");

updateItems();
button.addEventListener("click", function () {
  const input = inputValue.value;

  updateItems("add", input);
});
