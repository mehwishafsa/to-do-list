function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");

  // Task content span
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;
  taskSpan.style.flex = "1";

  // Toggle completion
  taskSpan.addEventListener("click", () => {
    taskSpan.classList.toggle("completed");
  });

  // Edit Button
  const editBtn = document.createElement("button");
  editBtn.textContent = "✏️";
  editBtn.onclick = () => {
    const newText = prompt("Edit your task:", taskSpan.textContent);
    if (newText !== null && newText.trim() !== "") {
      taskSpan.textContent = newText.trim();
    }
  };

  // Delete Button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.onclick = () => li.remove();

  // Append all
  li.appendChild(taskSpan);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);
  taskInput.value = "";
}
