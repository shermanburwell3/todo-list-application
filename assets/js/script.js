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
        nextId = JSON.parse(localStorage.getItem("nextId"));
        return nextId;
    }

}

// Todo: create a function to create a task card
function createTaskCard(task) {

    // Create elements for task card
    const taskCard = $('<div>');
    taskCard.attr('class','task-card');
    taskCard.attr('id', task.id);
    taskCard.attr('style', 'background-color: white;')
    taskCard.attr('data-status', task.status);
    const taskCardTitle = $('<h3>').text(task.title);
    taskCardDueDate = $('<p>').text("Due by EoD: " + task.dueDate);
    const taskCardBody = $('<p>').text(task.body);
    const deleteButton = $('<button>').text("Delete");
    deleteButton.attr('class', 'btn-delete');
    console.log('elements created');
    taskCard.append(taskCardTitle);
    taskCard.append(taskCardDueDate);
    taskCard.append(taskCardBody);
    taskCard.append(deleteButton);

    if (task.status == 'to-do') {
        $('#todo-cards').append(taskCard);
    }
    else if (task.status == 'in-progress') {
        $('#in-progress-cards').append(taskCard);
    }
    else if (task.status == 'done') {
        $('#done-cards').append(taskCard);
    }

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

    if (taskList.length != 0) {
        for (let i = 0; i < taskList.length; i++) {
            
            let task = taskList[i];
            console.log(task);
            createTaskCard(task);

        }
    }

}

// Todo: create a function to handle adding a new task
function handleAddTask(){


    task = {
        id: generateTaskId(),
        title: $('#taskTitle').val(),
        dueDate: $('#datepicker').val(),
        body: $('#taskBody').val(),
        status: "to-do",

    };

    if (!taskList){
        taskList = [task];
    }
    else {
        console.log(taskList);
        taskList.push(task);
    }
    createTaskCard(task);
    nextId++;
    localStorage.setItem('nextId', nextId);
    localStorage.setItem('tasks', JSON.stringify(taskList));
    console.log(task);

    // Add new event listener for new delete button
    // $('.btn-delete').on('click', function (event) {
    //     console.log($(event.target).parent());
    //     handleDeleteTask(event);
    // });

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {
    console.log('deleting...');
    const taskId = $(event.target).parent().attr('id');
    console.log(taskId);

    // Find the index of the task to delete
    const taskIndex = taskList.findIndex(task => task.id == taskId);

    console.log(taskIndex);

    if (taskIndex !== -1) {
        // Remove the task from the taskList array
        taskList.splice(taskIndex, 1);

        // Update local storage
        localStorage.setItem('tasks', JSON.stringify(taskList));

        // Remove the task card from the UI
        $(event.target).parent().remove();

        console.log('Deleted!');
    }
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
    let droppedElement = ui.draggable;

    if ($(event.target).is('#todo-cards')) {
        droppedElement.attr('data-status', 'todo');
        console.log(`assign status to to-do`);
    }
    else if ($(event.target).is('#in-progress-cards')) {
        droppedElement.attr('data-status', 'in-progress');
        console.log(`assign status to in prog`);
    }
    else if ($(event.target).is('#done-cards')) {
        droppedElement.attr('data-status', 'done');
        console.log(`assign status to done`);
        
    }

    console.log(event);
    console.log(ui);
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

    //Render task list from localStorage
    console.log('rendering');
    renderTaskList();
    console.log('rendered');

    
    
    $(function() {
        $('#datepicker').datepicker({
            changeMonth: true,
            changeYear: true,
        });
    });

    $(function(event) {
        $("#todo-cards, #in-progress-cards, #done-cards").sortable({
            connectWith: ".card-list",
            update: function(event, ui) {
            handleDrop(event, ui);
            }
        }).disableSelection();
        console.log(event);
        
      });

        
    $('body').on('click', '.btn-delete', function (event) {
        handleDeleteTask(event);
    });

    $('#modal-footer-btn').on('click', function (event) {
        console.log(event);
        event.preventDefault();

        handleAddTask();
    });



    console.log(taskList);

});
