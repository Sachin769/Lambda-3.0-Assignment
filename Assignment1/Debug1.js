function ToDoApp() {
    this.tasks = [];
}

ToDoApp.prototype.addTask = function(task) {
    if (task != null && typeof task === 'object') {
        if(Array.isArray(task)){
            for(const particularTask of task){
                this.tasks.push(particularTask);
            }
        }else{
            this.tasks.push(task.text);
        }
    } else {
        this.tasks.push(task);
    }
}

ToDoApp.prototype.displayTasks = function() {
    this.tasks.forEach(function(task, index) {
        console.log(index + ": " + task);
    });
}

// Usage
var myToDo = new ToDoApp();
myToDo.addTask({ text: "Buy groceries" });
myToDo.addTask("Attend meeting at 10 AM");
myToDo.addTask(["Call John", "Pay bills"]);
myToDo.displayTasks();
