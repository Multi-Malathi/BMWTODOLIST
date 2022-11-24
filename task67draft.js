class myToDoList {
    constructor(name,description,assignedTo,dueDate,){
        this._name =name;
        this._descrition =description;
        this._assignedTo =assignedTo;
        this._dueDate=dueDate;
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
}