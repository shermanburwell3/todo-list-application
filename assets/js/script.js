// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));



// Todo: create a function to generate a unique task id
function generateTaskId() {
    // Check for existing task list and nextId
    if (taskList) {
        if (nextId) {
            return nextId;
        }
    }

    if (!nextId) {
        // Assign value to nextId in localStorage
        localStorage.setItem("nextId", "0");
        return JSON.parse(localStorage.getItem("nextId"));
    }

}

// Todo: create a function to create a task card
function createTaskCard(task) {

    // Create elements for task card
    let taskCard = $('<div>');
    taskCard.attr('id', task.id);
    taskCard.attr('style', 'background-color: white;')
    let taskCardTitle = $('<h3>').text(task.title);
    taskCardDueDate = $('<p>').text("Due by EoD: " +task.dueDate);
    let taskCardBody = $('<p>').text(task.body);
    deleteButton = $('<button>').text("Delete");
    deleteButton.attr('class', 'btn btn-delete');

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


    task = {
        id: nextId,
        title: $('#taskTitle-in'),
        dueDate: $('#datepicker'),
        body: $('#taskBody-in'),

    };
    createTaskCard(task);
    nextId++;
    taskList.append(task);
    console.log(task);

    

    console.log(event);

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
    // createTaskCard({
    //     id: nextId,
    //     title: "Build more JS",
    //     dueDate: "06/12/2024",
    //     body: "I need to get good at jquery fast."
    
    
    // });

    // $('.btn').on('click', function (event) {
    //     console.log(event.target);
    // });

    
    
    
    // Create and append elements in jquery for title
    let modalForm = $('<form>');
    modalForm.attr('id', 'modal-form')
    let titleLabel = $('<label>');
    titleLabel.attr('for', 'taskTitle-in');
    titleLabel.attr('style', 'display: block;');
    titleLabel.text('Task:');
    let titleInput = $('<input>');
    titleInput.attr('id', 'taskTitle-in');
    titleInput.attr('style', 'display: block;');

    modalForm.append(titleLabel)
    modalForm.append(titleInput);

    // Create and append elements in jquery for body

    let bodyLabel = $('<label>');
    bodyLabel.attr('for', 'taskBody-in');
    bodyLabel.attr('style', 'display: block;');
    bodyLabel.text('Details:');
    let bodyInput = $('<textarea>');
    bodyInput.attr('id', 'taskBody-in');
    bodyInput.attr('style', 'display: block;');

    modalForm.append(bodyLabel);
    modalForm.append(bodyInput);

    // Create and append elements for date picker
    

    let dateLabel = $('<label>');
    dateLabel.attr('for', 'datepicker');
    dateLabel.attr('style', 'display: block;');
    dateLabel.text('Date:');
    let dateInput = $('<input>');
    dateInput.attr('id', 'datepicker');
    dateInput.attr('style', 'display: block;');

    modalForm.append(dateLabel);
    modalForm.append(dateInput);
    $(function() {
        $('#datepicker').datepicker({
            changeMonth: true,
            changeYear: true,
        });
    });
    
    $('.modal-body').append(modalForm);

    $('#btn-save').on('click', function (event) {
        console.log(event);
        handleAddTask(event);
    });

});
