const input = document.getElementById("input");
const listContainer = document.getElementById("list-container");

document.getElementById("button").addEventListener("click", function () {
  if (input.value === "") {
    alert("Please add some task");
  } else {
    const li = document.createElement("li");

    // Create span to hold task text
    const taskSpan = document.createElement("span");
    taskSpan.textContent = input.value;
    li.appendChild(taskSpan);

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "&times;";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = function () {
      listContainer.removeChild(li);
      saveData();
    };
    li.appendChild(deleteBtn);

    // Edit button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-btn");
    editBtn.onclick = function () {
      const newTask = prompt("Edit your task:", taskSpan.textContent);
      if (newTask !== null && newTask.trim() !== "") {
        taskSpan.textContent = newTask;
        saveData();
      }
    };
    li.appendChild(editBtn);

    listContainer.appendChild(li);
    saveData();
  }
  input.value = "";
});

const saveData = function () {
  localStorage.setItem("data", listContainer.innerHTML);
};

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
  reattachHandlers();
}

function reattachHandlers() {
  const items = listContainer.querySelectorAll("li");
  items.forEach((li) => {
    const deleteBtn = li.querySelector(".delete-btn");
    const editBtn = li.querySelector(".edit-btn");
    const taskSpan = li.querySelector("span");

    if (deleteBtn) {
      deleteBtn.onclick = function () {
        listContainer.removeChild(li);
        saveData();
      };
    }

    if (editBtn) {
      editBtn.onclick = function () {
        const newTask = prompt("Edit your task:", taskSpan.textContent);
        if (newTask !== null && newTask.trim() !== "") {
          taskSpan.textContent = newTask;
          saveData();
        }
      };
    }
  });
}

showTask();
