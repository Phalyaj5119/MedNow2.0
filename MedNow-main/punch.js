let isPunchedIn = false;

function punchIn() {
  if (!isPunchedIn) {
    const name = document.getElementById("employee-name").value;
    const id = document.getElementById("employee-id").value;
    if (name && id) {
      isPunchedIn = true;
      const currentDate = new Date();
      const time = document.getElementById("arrival").value;
      document.getElementById("status").innerText = `Punched In: ${time}`;
      addAttendanceRecord(name, id, time);
    } else {
      alert("Please enter your name and employee ID!");
    }
  } else {
    alert("You are already punched in!");
  }
}

function punchOut() {
  if (isPunchedIn) {
    const name = document.getElementById("employee-name").value;
    const id = document.getElementById("employee-id").value;
    if (name && id) {
      isPunchedIn = false;
      const currentDate = new Date();
      const time = document.getElementById("arrival").value;
      document.getElementById("status").innerText = `Punched Out: ${time}`;
      updateLastAttendanceRecord(name, id, time);
    } else {
      alert("Please enter your name and employee ID!");
    }
  } else {
    alert("You need to punch in first!");
  }
}

function addAttendanceRecord(name, id, punchInTime, punchOutTime) {
  const tableBody = document.getElementById("attendance-body");
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${getCurrentDate()}</td>
    <td>${name}</td>
    <td>${id}</td>
    <td>${punchInTime}</td>
    <td>${punchOutTime}</td>
  `;
  tableBody.appendChild(newRow);
}

function updateLastAttendanceRecord(name, id, punchOutTime) {
  const tableBody = document.getElementById("attendance-body");
  const rows = tableBody.getElementsByTagName("tr");
  if (rows.length > 0) {
    const lastRow = rows[rows.length - 1];
    const cells = lastRow.getElementsByTagName("td");
    cells[4].innerText = punchOutTime;
  }
}

function getCurrentDate() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  let month = currentDate.getMonth() + 1;
  month = month < 10 ? "0" + month : month;
  let day = currentDate.getDate();
  day = day < 10 ? "0" + day : day;
  return `${year}-${month}-${day}`;
}
