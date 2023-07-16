document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#todo-form');
  const input = document.querySelector('#todo-input');
  const todoList = document.querySelector('#todo-list');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const todoText = input.value;
    if (todoText.trim() !== '') {
      addTodoToList(todoText);
      input.value = '';
    }
  });

  function addTodoToList(todoText) {
    const todoItem = document.createElement('li');
    todoItem.innerText = todoText;
    todoList.appendChild(todoItem);
  }
});

