// ===== STATE =====
let bank = [];
let odds = [];
let evens = [];

// ===== STATE FUNCTIONS =====
function addNumber(n) {
  bank.push(n);
  render();
}

function sortOne() {

  const number = bank[0];
  bank = bank.slice(1); 

  if (number % 2 === 0) {
    evens.push(number);
  } else {
    odds.push(number);
  }
  render();
}

function sortAll() {
  while (bank.length > 0) {
    const number = bank[0];
    bank = bank.slice(1);

    if (number % 2 === 0) {
      evens.push(number);
    } else {
      odds.push(number);
    }
  }

  render();
}

// ===== COMPONENTS =====
function NumberForm() {
  const form = document.createElement("form");

  form.innerHTML = `
    <input name="number" type="number" />
    <button type="submit">Add number</button>
  `;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const value = Number(form.number.value);
    addNumber(value);
    form.reset();
  });

  return form;
}

function Buttons() {
  const div = document.createElement("div");

  const sort1 = document.createElement("button");
  sort1.textContent = "Sort 1";
  sort1.type = "button";
  sort1.addEventListener("click", function () {
    sortOne();
  });

  const sortAllBtn = document.createElement("button");
  sortAllBtn.textContent = "Sort All";
  sortAllBtn.type = "button";
  sortAllBtn.addEventListener("click", function () {
    sortAll();
  });

  div.append(sort1, sortAllBtn);
  return div;
}

function NumberSection(title, array) {
  //TODO
}

// ===== RENDER =====
function render() {
render();
}
