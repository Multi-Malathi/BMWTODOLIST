import TaskManager from "./JS/classes/TaskManager.js"
import saveTask from "./JS/modules/saveTask.js"

function loadPage(){
    const tasks = TaskManager.getAllTasks()
    const tasksContainer = document.getElementById("tasksContainer")
    const form = document.getElementById("form")
    form.addEventListener("submit", (event)=>saveTask(event))
    for (let [key] of Object.entries(tasks)){
        let eachObj = JSON.parse(tasks[key])
        let parsed = JSON.parse(eachObj)
            let card = tasksContainer.appendChild(document.createElement("div"))
            card.setAttribute("id", "cardBody")
            let cardBody = document.getElementById("cardBody")
            let cardName = cardBody.appendChild(document.createElement("p"))
            let cardDescription = cardBody.appendChild(document.createElement("p"))
            let cardAssignedTo = cardBody.appendChild(document.createElement("p"))
            let cardDueDate = cardBody.appendChild(document.createElement("p"))
            let cardStatus = cardBody.appendChild(document.createElement("p"))
            let deleteBtn = cardBody.appendChild(document.createElement("button"))
            cardName.innerHTML = `Name: ${parsed.name}`
            cardDescription.innerHTML = `Description: ${parsed.description}`
            cardAssignedTo.innerHTML = `Assigned To: ${parsed.assignedTo}`
            cardDueDate.innerHTML = `Due Date: ${parsed.dueDate}`
            cardStatus.innerHTML = `Status: ${parsed.status}`
            deleteBtn.innerHTML = `Delete`
    }
}

export default loadPage