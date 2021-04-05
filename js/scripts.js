// Business Logic
function ListOfTasks() {
  this.tasks={};
  this.currentId=0;
}

ListOfTasks.prototype.addTask = function(task){
  this.tasks[this.currentId]= task;
  this.currentId ++;
};

ListOfTasks.prototype.delete=function(selectedId){
  if(this.tasks[selectedId]===undefined) {
    return false;
  }
  delete this.tasks[selectedId];
  return true;
};

function Task(name, description) {
  this.name = name;
  this.description = description;
  this.complete= false;
}

Task.prototype.markAsComplete = function() {
  this.complete=true;
};

let taskList = new ListOfTasks();

// UI Logic
