document.addEventListener('DOMContentLoaded', () => {
    const todoListElement = document.getElementById('todoList');
    let Count = 0;

    function updateCompletionCount() {
        return new Promise((resolve) => {
            if (Count === 5) {
                resolve('Congrats. 5 Tasks have been Successfully Completed');
            } else {
                resolve();
            }
        });
    }

    function fetchTodos() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(todos => {
                todos.forEach(todo => {
                    const todoItem = document.createElement('div');
                    todoItem.className = 'todo-item';

                    const checkbox = document.createElement('input');
                    checkbox.type = 'checkbox';
                    checkbox.checked = todo.completed;
                    checkbox.addEventListener('change', () => {
                        if (checkbox.checked) {
                            Count++;
                        } else {
                            Count--;
                        }
                        updateCompletionCount().then(message => {
                            if (message) {
                                alert(message);
                            }
                        });
                    });

                    const label = document.createElement('label');
                    label.textContent = todo.title;

                    todoItem.appendChild(checkbox);
                    todoItem.appendChild(label);
                    todoListElement.appendChild(todoItem);
                });
            })
            .catch(error => console.error('Error fetching todos:', error));
    }

    fetchTodos();
});





