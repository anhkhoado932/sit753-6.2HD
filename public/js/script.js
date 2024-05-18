/* eslint-disable */

function addNote() {
    var title = document.getElementById("noteTitle").value;
    var content = document.getElementById("noteContent").value;

    var noteList = document.getElementById("noteList");
    var listItem = document.createElement("li");
    listItem.innerHTML = "<h3>" + title + "</h3><p>" + content + "</p>";
    noteList.appendChild(listItem);

    // Clear input fields
    document.getElementById("noteTitle").value = "";
    document.getElementById("noteContent").value = "";
}
