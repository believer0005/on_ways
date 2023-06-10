// Get elements from HTML
const inputElement = document.querySelector("input");
const buttonElement = document.querySelector("button");
const ulElement = document.querySelector("ul");

// Add event listener to button
buttonElement.addEventListener("click", addItem);

// Function to add item to list
function addItem() {
  // Create new list item
  const liElement = document.createElement("li");
  const checkboxElement = document.createElement("input");
  checkboxElement.type = "checkbox";
  const spanElement = document.createElement("span");
  spanElement.innerText = inputElement.value;
  const buttonElement = document.createElement("button");
  buttonElement.innerText = "Delete";

  // Add elements to list item
  liElement.appendChild(checkboxElement);
  liElement.appendChild(spanElement);
  liElement.appendChild(buttonElement);

  // Add list item to list
  ulElement.appendChild(liElement);

  // Clear input field
  inputElement.value = "";

  // Add event listener to delete button
  buttonElement.addEventListener("click", deleteItem);
}

// Function to delete item from list
function deleteItem(event) {
  const liElement = event.target.parentElement;
  ulElement.removeChild(liElement);
}