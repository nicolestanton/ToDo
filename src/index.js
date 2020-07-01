let items = [];
const button = document.getElementById("submit");
let inputValue = document.getElementById("input");
const results = document.getElementById("todo-container");

button.addEventListener('click', function(){
  const input = inputValue.value;
  
  // items.push(items[items.length-1])
  items.push(input)
  items.forEach((item) => {
    let p = document.createElement('p');
    p.innerText = item;
    results.appendChild(p); 
  });
  console.log(items[items.length-1])
})
