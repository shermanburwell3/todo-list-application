// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
    // Check length of taskList array and return number based on that

}

// Todo: create a function to create a task card
function createTaskCard(task) {
    //Create

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

    // create ul based on localStorage and ul.sortable()

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
    // get modal form data and return the text input. this will be called by event listener

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
    // ul.sortable() advanced

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
