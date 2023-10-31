function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("taskList");
        const li = document.createElement("li");
        li.innerHTML = `
            ${taskText}
            <button onclick="removeTask(this)">Delete</button>
        `;
        taskList.appendChild(li);

        taskInput.value = "";
    }
}

function removeTask(button) {
    const li = button.parentElement;
    li.remove();
}
