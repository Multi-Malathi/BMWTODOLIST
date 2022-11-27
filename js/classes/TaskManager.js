class TaskManager {
    static id = 0
    static tasks = []
    constructor(name, description, assigned, date, status){
        this.id = TaskManager.id++;
        this.name = name;
        this.description = description;
        this.assigned = assigned;
        this.date = date;
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