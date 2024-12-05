document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("todo-form");
  const taskList = document.getElementById("task-list");

  // Load tasks from local storage
  function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
      const taskElement = document.createElement("div");
      taskElement.classList.add("task-item");
      taskElement.innerHTML = `
                  <div>
                      <strong>${task.title}</strong>
                      <p>${task.description}</p>
                      <small>Status: ${task.status}</small>
                  </div>
                  <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
              `;
      taskList.appendChild(taskElement);
    });
  }

  // Save tasks to local storage
  function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // Add new task
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const status = document.querySelector('input[name="status"]:checked').value;

    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    tasks.push({ title, description, status });
    saveTasks(tasks);
    loadTasks();

    // Reset form
    form.reset();
  });

  // Delete task
  window.deleteTask = function (index) {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    tasks.splice(index, 1);
    saveTasks(tasks);
    loadTasks();
  };

  // Initial load of tasks
  loadTasks();
});
