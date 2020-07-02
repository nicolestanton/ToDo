const items = [];
const button = document.getElementById("submit");
const inputValue = document.getElementById("input");
const results = document.getElementById("todo-container");

button.addEventListener("click", function () {
  const input = inputValue.value;

  if (input.length > -1) {
    items.push(input);
    results.innerHTML = "";
    items.forEach((item) => {
      let p = document.createElement("p");
      p.innerText = item;
      results.appendChild(p);
    });
  }

  if (input === "") {
    alert("Enter an item in your list");
  }
});
