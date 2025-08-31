function addItem() {
      const input = document.getElementById("taskInput");
      const text = input.value.trim();

      if (text === "") {
        alert("task is input");
        return;
      }

      const li = document.createElement("li");
      li.innerText = text;
      const deleteBtn = document.createElement("button");
      deleteBtn.innerText = "Delete";
      deleteBtn.className = "deletebtn";

      deleteBtn.onclick = function() {
        li.remove();
      };

      li.appendChild(deleteBtn);
      document.getElementById("taskList").appendChild(li);
      input.value = "";
}