const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();  // fixed here
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  // Toggle done class on click
  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = () => li.remove();

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
}

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});
