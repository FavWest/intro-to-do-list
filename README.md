## Specs
#### Describe: MakeTask
"It should construct a Task object with properties taskName, description, complete"
Code: 
let dishes = new Task("dishes", "put away");
console.log(dishes);
Expected Output: Task {taskName: "dishes", description: "put away", complete: false};

Test: "it should insert new task into list of tasks object"
Code: let dishes = new Task("dishes", "put away");
taskList.addTask(dishes);
Expected Output:

#### Describe: MarkAsComplete
Test: "It should change the task.complete boolean to 'true'"
Code: let dishes = new Task("dishes", "put away");
dishes.MarkAsComplete();
console.log(dishes.complete);
Expected Output: true;

#### Describe: Delete
Test: "It should delete the selected task from taskList"
Code: let dishes = new Task("dishes", "put away");
taskList.addTask(dishes);
taskList.delete(0);
console.log(taskList.tasks[0])
Expected Output: undefined


# TITLE

#### Brief Description

#### By _**Victoria West**_

## Technologies Used
* HTML
* CSS
* Bootstrap
* JQuery
* JavaScript

## Description
_Description_

## Setup/Installation Requirements
### View Online
* [Click here](https://favwest.github.io/HERE) to view on GitHub pages
### Run Locally
* **Requirements:** ability to view HTML in a web browser, internet access, Git
#### Using GitHub Desktop
* **Requires GitHub Desktop**
* Go to https://github.com/FavWest/HERE
* Click green CODE button and select "Open with GitHub Desktop" from the dropdown menu
* Open the repository in your editor and run "index.html" OR open the repository in your file manager and double-click "index.html" to open it in a browser
#### Using command line with Git
* Clone code using `git clone https://github.com/FavWest/HERE.git`
* Open Portfolio folder in Explorer or Finder
* Double-click "index.html" to open in a browser
## Known Bugs
* 
## License
MIT
Copyright (c) 2021 Victoria West
## Contact Information
Victoria West email@email.com
