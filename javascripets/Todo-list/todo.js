function addTodo() {
    let input = document.getElementById('todoInput');
    let todoText = input.value.trim();
    if (todoText == '') {
        alert('please enter the todo item');
        return;
    }

    let li = document.createElement('li');
    li.innerHTML = `${todoText}
        <span class="delete-btn" onclick="deleteTask(this)">❌</span>`;

    document.getElementById('todoList').appendChild(li);
    textInput.value = '';


}

function deleteTask(element){
    element.parentElement.remove();
}