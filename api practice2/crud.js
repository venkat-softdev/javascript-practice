function renderfun() {
  let rows = "";   // ✅ declare outside

  if (tasks.length === 0) {
    notaskmesssage.style.display = "block";
    tbody.innerHTML = "";
    return;
  }

  notaskmesssage.style.display = "none";

  tasks.forEach((task) => {
    rows += `
      <tr>
        <td>${task.id}</td>
        <td>${task.name}</td>
        <td>${task.email}</td>
        <td>${task.phone}</td>
        <td>
          <div class="action-btn">
            <button onclick="editTask('${task.id}')">Edit</button>
            <button class="deletebtn" onclick="deleteTask('${task.id}')">Delete</button>
          </div>
        </td>
      </tr>
    `;
  });

  tbody.innerHTML = rows; // ✅ now works
}
