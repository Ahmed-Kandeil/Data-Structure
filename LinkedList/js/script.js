// Function to create a new node with a specified value
const createNode = (value) => {
  const node = document.createElement("div");
  node.className = "node";
  node.textContent = value;

  return node;
};

// Function to add a node to the container based on user input
const addNode = () => {
  const container = document.getElementById("node-container");
  const inputNumber = document.getElementById("input-number").value;
  const addPosition = document.getElementById("add-options").value;

  if (inputNumber.trim() === "") return;

  const node = createNode(inputNumber);

  if (addPosition === "first")
    container.insertBefore(node, container.firstElementChild);
  else container.appendChild(node);
};

// Function to remove a node from the container based on user input
const removeNode = () => {
  const container = document.getElementById("node-container");
  const removePosition = document.getElementById("remove-options").value;

  if (container.childElementCount === 0) return;

  const elementToRemove =
    removePosition === "first"
      ? container.firstElementChild
      : container.lastElementChild;

  container.removeChild(elementToRemove);
};

// Function to remove all nodes from the container
const clearNodes = () => {
  const container = document.getElementById("node-container");
  container.innerHTML = ""; // Clear all nodes
};

// Function to sort all nodes from the container
const sortNodes = () => {
  const container = document.getElementById("node-container");
  const nodes = Array.from(container.children);

  nodes.sort((a, b) => parseInt(a.textContent) - parseInt(b.textContent));

  container.innerHTML = "";
  nodes.forEach((node) => container.appendChild(node));
};

const addBtn = document.getElementById("add-btn");
const removeBtn = document.getElementById("remove-btn");

const clearBtn = document.getElementById("clear-btn");
const sortBtn = document.getElementById("sort-btn");

addBtn.addEventListener("click", addNode);
removeBtn.addEventListener("click", removeNode);

clearBtn.addEventListener("click", clearNodes);
sortBtn.addEventListener("click", sortNodes);
