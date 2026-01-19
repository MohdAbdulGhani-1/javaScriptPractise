// Load todos from localStorage when page loads
window.addEventListener('DOMContentLoaded', loadTodos);

function addTodo() {
    let input = document.getElementById('todoInput');
    let todoText = input.value.trim();
    
    if (todoText === '') {
        input.style.borderColor = '#ff6b6b';
        setTimeout(() => {
            input.style.borderColor = '#e0e0e0';
        }, 1500);
        return;
    }

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onchange = function() {
        toggleComplete(this.parentElement);
    };

    let textSpan = document.createElement('span');
    textSpan.textContent = todoText;

    // Create delete button
    let deleteBtn = document.createElement('span');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = '×';
    deleteBtn.onclick = function() {
        deleteTask(this.parentElement);
    };

    // Create list item
    let li = document.createElement('li');
    li.appendChild(checkbox);
    li.appendChild(textSpan);
    li.appendChild(deleteBtn);
    li.dataset.task = todoText;

    document.getElementById('todoList').appendChild(li);
    input.value = '';
    input.focus();
    saveTodos();
}

function deleteTask(element) {
    element.style.animation = 'slideIn 0.3s ease reverse';
    setTimeout(() => {
        element.remove();
        saveTodos();
    }, 300);
}

function toggleComplete(element) {
    element.classList.toggle('completed');
    saveTodos();
}

function saveTodos() {
    let todos = [];
    document.querySelectorAll('#todoList li').forEach(li => {
        todos.push({
            text: li.dataset.task,
            completed: li.classList.contains('completed')
        });
    });
    localStorage.setItem('todos', JSON.stringify(todos));
}

function loadTodos() {
    let savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
        let todos = JSON.parse(savedTodos);
        todos.forEach(todo => {
            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = todo.completed;
            checkbox.onchange = function() {
                toggleComplete(this.parentElement);
            };

            let textSpan = document.createElement('span');
            textSpan.textContent = todo.text;

            let deleteBtn = document.createElement('span');
            deleteBtn.className = 'delete-btn';
            deleteBtn.textContent = '×';
            deleteBtn.onclick = function() {
                deleteTask(this.parentElement);
            };

            let li = document.createElement('li');
            li.appendChild(checkbox);
            li.appendChild(textSpan);
            li.appendChild(deleteBtn);
            li.dataset.task = todo.text;
            if (todo.completed) li.classList.add('completed');

            document.getElementById('todoList').appendChild(li);
        });
    }
}

// Allow adding todo with Enter key
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('todoInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTodo();
        }
    });
});