function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  // Toggle completion when clicked
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.onclick = (e) => {
    e.stopPropagation(); // stop strike-through toggle
    li.remove();
  };

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  taskInput.value = "";
}
