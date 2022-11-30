class TaskManager {
    static id =  localStorage.getItem(`TaskID`) > 0 ? localStorage.getItem('TaskID')++ : 0
    static tasks = []
    constructor(name, description, assignedTo, dueDate, status){
        this.id = TaskManager.id++;
        this.name = name;
        this.description = description;
        this.assignedTo = assignedTo;
        this.dueDate = dueDate;
        this.status = status;
        
    }

    static getAllTasks(){
        let tasks = {...localStorage}
        return tasks
    }

    static saveToLocal(obj){
        
        TaskManager.tasks.push(JSON.stringify(obj))
        TaskManager.tasks.map(task => localStorage.setItem(TaskManager.id++, JSON.stringify(task)))
        
    }


}

export default TaskManager