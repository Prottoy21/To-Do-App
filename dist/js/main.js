const input = document.getElementById("input");
const listContainer = document.getElementById("list-container");

const button = document
  .getElementById("button")
  .addEventListener("click", function () {
    if (input.value === "") {
      alert("Please add some task");
    } else {
      const li = document.createElement("li");
      const deleteBtn = document.createElement("button");
      deleteBtn.innerHTML = "&times;";
      li.innerHTML = input.value;
      listContainer.appendChild(li);
      deleteBtn.classList.add("delete-btn");
      deleteBtn.onclick = function () {
        listContainer.removeChild(li);
      };

      li.appendChild(deleteBtn);
      listContainer.appendChild(li);
    }
    input.value = "";

    saveData();
  });

const saveData = function () {
  localStorage.setItem("data", listContainer.innerHTML);
};

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
  reattachDeleteHandlers();
}

function reattachDeleteHandlers() {
  const items = listContainer.querySelectorAll("li");
  items.forEach((li) => {
    const deleteBtn = li.querySelector(".delete-btn");
    if (deleteBtn) {
      deleteBtn.onclick = function () {
        listContainer.removeChild(li);
        saveData();
      };
    }
  });
}

showTask();
