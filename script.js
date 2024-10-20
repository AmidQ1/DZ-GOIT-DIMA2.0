// task 1
const input = document.getElementById("input");
const list = document.getElementById("list");
const addTaskButton = document.getElementById("addTaskButton");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task.text;
    if (task.completed) {
      li.classList.add("completed");
    }
    li.addEventListener("click", function () {
      task.completed = !task.completed;
      localStorage.setItem("tasks", JSON.stringify(tasks));
      renderTasks();
    });
    list.appendChild(li);
  });
}

addTaskButton.addEventListener("click", function () {
  const taskText = input.value;
  if (taskText) {
    tasks.push({ text: taskText, completed: false });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    input.value = "";
    renderTasks();
  }
});
renderTasks();
