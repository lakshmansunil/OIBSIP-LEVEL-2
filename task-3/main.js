// Get the form, input, and todo list elements from the HTML
const form = document.querySelector('#new-task-form');
const input = document.querySelector('#new-task');
const todoList = document.querySelector('#todo-list');

// Add a submit event listener to the form
form.addEventListener('submit', function(event) {
  // Prevent the form from refreshing the page
  event.preventDefault();

  // Get the value of the input element
  const newTask = input.value.trim();

  // If the input is not empty, create a new list item and add it to the todo list
  if (newTask !== '') {
    // Create a new list item element
    const li = document.createElement('li');

    // Create a new checkbox element and set its type to "checkbox"
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    // Create a new label element and set its text content to the new task
    const label = document.createElement('label');
    label.textContent = newTask;
    label.setAttribute('for', `task-${todoList.children.length + 1}`);

    // Set the ID of the list item to a unique value based on the number of existing items in the todo list
    li.id = `task-${todoList.children.length + 1}`;

    // Add the checkbox and label elements to the list item
    li.appendChild(checkbox);
    li.appendChild(label);

    // Create a new button element and set its text content to "Delete"
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    // Add a click event listener to the delete button that removes the list item from the todo list
    deleteButton.addEventListener('click', function(event) {
      todoList.removeChild(li);
    });

    // Add the delete button to the list item
    li.appendChild(deleteButton);

    // Add the list item to the todo list
    todoList.appendChild(li);

    // Reset the value of the input element to an empty string
    input.value = '';
  }
});
