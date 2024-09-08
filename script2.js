// Fetching Todo List from API and handling completion of tasks
document.addEventListener("DOMContentLoaded", () => {
    // const apiURL = 'https://hompsonplaceholder.tyscode.com.todos';
    const apiURL="https://jsonplaceholder.typicode.com/todos"
    const todoItems = document.getElementById('todoItems');
    let completedTasks = 0;

    // Mocking the API call for demo
    function fetchTodos() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([
                    { id: 1, title: "Learn JavaScript", completed: false },
                    { id: 2, title: "Complete Todo App", completed: false },
                    { id: 3, title: "Review PRs", completed: false },
                    { id: 4, title: "Attend Meeting", completed: false },
                    { id: 5, title: "Workout", completed: false }
                ]);
            }, 1000);


        });
    }

    // Render the Todo list on the page
    function renderTodos(todos) {
        todos.forEach(todo => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <label>
                    <input type="checkbox" data-id="${todo.id}">
                    ${todo.title}
                </label>
            `;
            todoItems.appendChild(listItem);
        });

        // Add event listener for checkbox change
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', (event) => {
                if (event.target.checked) {
                    completedTasks++;
                } else {
                    completedTasks--;
                }
                checkCompletedTasks();
            });
        });
    }

    // Check if 5 tasks have been completed
    function checkCompletedTasks() {
        if (completedTasks === 5) {
            showCompletionAlert();
        }
    }

    // Show alert after 5 tasks are completed
    function showCompletionAlert() {
        return new Promise((resolve) => {
            alert("Congrats! 5 Tasks have been Successfully Completed");
            resolve();
        });
    }

    // Fetch and render todos on page load
    fetchTodos().then(todos => renderTodos(todos)).catch(error => console.error('Error fetching todos:', error));
});