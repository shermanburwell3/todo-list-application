// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
    // Check length of taskList array and return number based on that
    if (taskList) {

    // Generate an ID based on the length of existing tasks
        let i = taskList.length;
        return i;
    }
    else {
        let i = 0;
        return i;
    }

}

// Todo: create a function to create a task card
function createTaskCard(task) {

    // Create elements for task card
    taskCard = $('<div>');
    taskCard.attr('id', generateTaskId);
    taskCard.attr('style', 'background-color: white;')
    taskCardTitle = $('<h3>').text(task.title);
    taskCardDueDate = $('<p>').text("Due by EoD: " +task.dueDate);
    taskCardBody = $('<p>').text(task.body);
    deleteButton = $('<button>').text("Delete");

    taskCard.append(taskCardTitle);
    taskCard.append(taskCardDueDate);
    taskCard.append(taskCardBody);
    taskCard.append(deleteButton);

    $('#todo-cards').append(taskCard);
    

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

// Test createTaskCard function
createTaskCard({
    id: 0,
    title: "Build more JS",
    dueDate: "06/12/2024",
    body: "I need to get good at jquery fast."


});

createTaskCard({
    id: 0,
    title: "Build even more JS",
    dueDate: "06/12/2024",
    body: "I need to get good at jquery fast."


});