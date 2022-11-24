let tasks = [];
const addTask = (ev)=>{
    ev.preventDefault();
    let task = {
        Name : document.getElementById('writeName').value,
        Description : document.getElementById('checkDescription').value,
        Assigned : document.getElementById('assignedto').value,
        Date : document.getElementById('dDate').value,
       //Status : document.getElementById('writeName').value,
    }
    tasks.push(task);
    document.forms[0].reset();
    console.warn("added",{tasks});
    localStorage.setItem("TaskList",JSON.stringify(tasks));
}


document.addEventListener('DOMContentLoaded', ()=>{
document.getElementById('submitBtn').addEventListener('click',addTask);
});