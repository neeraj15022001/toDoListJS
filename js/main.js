const parentList = document.getElementById("task-container")
const addTask = document.getElementById("add-task-button")
const inputField = document.getElementById("input-field")
// Event Listener
addTask.addEventListener("click", () => {
  const value = inputField.value;
  if (value != "") {
    addElement(value);
    inputField.value = ""
  } else {
    console.log("Enter Task First");
  }
});

// Functions
function addElement(taskDescription) {
  //Creating Node
  let listItem = createListItem(taskDescription);
  parentList.appendChild(listItem);
}

function createListItem(task) {
  console.log(task);
  let listItem = document.createElement("li");
  listItem.className =
    "list-group-item d-flex flex-sm-row flex-column flex-md-row align-content-center justify-content-between";
  let paragraph = document.createElement("p");
  paragraph.className = "m-0 pt-2 text-sm-center text-center";
  let paragraphText = document.createTextNode(task);
  paragraph.appendChild(paragraphText);
  let buttonContainer = document.createElement("div");
  buttonContainer.className =
    "container d-flex flex-column flex-sm-column flex-md-row align-content-center justify-content-between flex-fill col-md-4";
  buttonContainer.appendChild(createEditField())
  buttonContainer.appendChild(createEditButton())
  buttonContainer.appendChild(createDoneButton())
  buttonContainer.appendChild(createRemoveButton())
  listItem.appendChild(paragraph)
  listItem.appendChild(buttonContainer)
  return listItem;
}

function createEditField() {
  let editField = document.createElement("input")
  editField.id = 'edit-field'
  editField.className = "py-2 mt-3 px-3 py-sm-2 mt-sm-3 px-sm-3 flex-md-fill my-md-0 mx-md-3 invisible edit-field"
  let placeholder = document.createAttribute("placeholder")
  placeholder.value = "Enter new value"
  editField.setAttributeNode(placeholder)
  let type = document.createAttribute("type")
  type.value = "text"
  editField.setAttributeNode(type)
  return editField
}
function createEditButton() {
  let editButton = document.createElement("button");
  editButton.className = "btn btn-warning ms-auto";
  let editAttribute = document.createAttribute("onclick");
  editAttribute.value = "editElement(event)";
  editButton.setAttributeNode(editAttribute);
  let editButtonText = document.createTextNode("Edit");
  editButton.appendChild(editButtonText);
  return editButton;
}

function createDoneButton() {
  let doneButton = document.createElement("button");
  doneButton.className = "btn btn-success mx-3";
  let doneButtonText = document.createTextNode("Done");
  let doneAttribute = document.createAttribute("onclick");
  doneAttribute.value = "doneElement(event)";
  doneButton.setAttributeNode(doneAttribute);
  doneButton.appendChild(doneButtonText);
  return doneButton;
}

function createRemoveButton() {
  let removeButton = document.createElement("button");
  removeButton.className = "btn btn-danger";
  let removeButtonText = document.createTextNode("Remove");
  let removeAttribute = document.createAttribute("onclick");
  removeAttribute.value = "removeElement(event)";
  removeButton.setAttributeNode(removeAttribute);
  removeButton.appendChild(removeButtonText);
  return removeButton;
}

function removeElement(e) {
  //Removing HTML Element
  let parentListItem = e.target.parentElement.parentElement
  parentListItem.remove()
}
function editElement(e) {
  //Replace HTML Element
  const editField = e.target.parentElement.childNodes[0]
  editField.classList.remove("invisible")
  console.log(e.target);
}
function doneElement(e) {
  const editField = e.target.parentElement.childNodes[0]
  console.log(editField)
  let paragraphTag = e.target.parentElement.parentElement.childNodes[0]
  console.log(paragraphTag)
  if(editField.value != "") {
    paragraphTag.innerText = editField.value
  }
  editField.value = ""
  editField.classList.add("invisible")
}
