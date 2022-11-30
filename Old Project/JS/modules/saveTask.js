import TaskManager from "./JS/classes/TaskManager.js";

function saveTask(event){
    event.preventDefault()
    let name = document.getElementById('writeName').value
    let description = document.getElementById('checkDescription').value
    let assigned = document.getElementById('assignedto').value
    let date = document.getElementById('dDate').value
    let status = document.getElementById('status').value
    let newTask = new TaskManager(name, description, assigned, date, status)
    TaskManager.saveToLocal(newTask)
}

export default saveTask