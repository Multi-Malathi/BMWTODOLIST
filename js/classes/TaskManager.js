class TaskManager {
    static id = localStorage.getItem("latestId") > 0 ? localStorage.getItem("latestId") : 0
    
    constructor(name, description, assignedTo, dueDate, status){
        this.id = TaskManager.id++;
        this._name = name;
        this._description = description;
        this._assignedTo = assignedTo;
        this._dueDate = dueDate;
        this._status = status
    }

    get name(){
        return this._name;
    }

    get description(){
        return this._descrition;
    }

    get assignedTo(){
        return this._assignedTo;
    }

    get dueDate(){
        return this._dueDate;
    }

    static getAllTasks(){
        return JSON.parse(localStorage.getItem("tasks"))
    }
}