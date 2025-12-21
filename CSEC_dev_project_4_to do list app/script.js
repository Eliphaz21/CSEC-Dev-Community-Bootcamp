const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
const totalCount = document.getElementById("totalCount");
const completedCount = document.getElementById("completedCount");
const clearAllBtn = document.getElementById("clearAll");

let totalTodos = 0;
let completedTodos = 0;

// Add Todo
addBtn.addEventListener("click", () => {
    const todoText = todoInput.value.trim();

    if (todoText === "") {
        alert("Please enter a todo!");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = todoText;

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    // Complete Todo
    completeBtn.addEventListener("click", () => {
        span.classList.toggle("completed");

        if (span.classList.contains("completed")) {
            completedTodos++;
        } else {
            completedTodos--;
        }
        completedCount.textContent = completedTodos;
    });

    // Delete Todo
    deleteBtn.addEventListener("click", () => {
        if (span.classList.contains("completed")) {
            completedTodos--;
            completedCount.textContent = completedTodos;
        }
        todoList.removeChild(li);
        totalTodos--;
        totalCount.textContent = totalTodos;
    });

    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    totalTodos++;
    totalCount.textContent = totalTodos;

    todoInput.value = "";
});

// Clear All Todos
clearAllBtn.addEventListener("click", () => {
    todoList.innerHTML = "";
    totalTodos = 0;
    completedTodos = 0;
    totalCount.textContent = 0;
    completedCount.textContent = 0;
});
