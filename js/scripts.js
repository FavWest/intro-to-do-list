// Business Logic
function ListOfTasks() {
  this.tasks=[];
  this.currentId=0;
}

ListOfTasks.prototype.addTask = function(task){
  this.tasks.push(task);
  this.currentId ++;
};

function Task(name, description) {
  this.name = name;
  this.description = description;
  this.complete= false;
}

Task.prototype.markAsComplete = function() {
  this.complete=true;
};

Task.prototype.delete=(function(task){
  if(this.tasks[name]===undefined) {
    return false;
  }
  delete this.tasks[name];
  return true;
});


let taskList = new ListOfTasks();

// UI Logic