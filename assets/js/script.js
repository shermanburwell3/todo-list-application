// Retrieve tasks and nextId from localStorage
let taskList = [JSON.parse(localStorage.getItem("tasks"))];
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
    let taskCard = $('<div>');
    taskCard.attr('id', task.id);
    taskCard.attr('style', 'background-color: white;')
    let taskCardTitle = $('<h3>').text(task.title);
    taskCardDueDate = $('<p>').text("Due by EoD: " +task.dueDate);
    let taskCardBody = $('<p>').text(task.body);
    let deleteButton = $('<button>').text("Delete");
    deleteButton.attr('class', 'btn-delete');
    console.log('elements created');
    taskCard.append(taskCardTitle);
    taskCard.append(taskCardDueDate);
    taskCard.append(taskCardBody);
    taskCard.append(deleteButton);

    $('#todo-cards').append(taskCard);
    

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

    if (taskList) {
        for (let i = 0; i < taskList.length; i++) {
            
            task = taskList[i];
            console.log(task);
            createTaskCard(task);

        }
    }

}

// Todo: create a function to handle adding a new task
function handleAddTask(){


    task = {
        id: generateTaskId(),
        title: $('#taskTitle-in').val(),
        dueDate: $('#datepicker').val(),
        body: $('#taskBody-in').val(),
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
    const taskId = $(event.target).parent().attr('id');

    // Find the index of the task to delete
    const taskIndex = taskList.findIndex(task => task.id === taskId);

    if (taskIndex !== -1) {
        // Remove the task from the taskList array
        taskList.splice(taskIndex, 1);

        // Update local storage
        localStorage.setItem('tasks', JSON.stringify(taskList));

        // Remove the task card from the UI
        $(event.target).parent().remove();
    }
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

    //Render task list from localStorage
    console.log('rendering');
    renderTaskList();
    console.log('rendered');
    handleDeleteTask;

    
    
    
    // Create and append elements in jquery for title
    // let modalForm = $('<form>');
    // modalForm.attr('id', 'modal-form')
    // let titleLabel = $('<label>');
    // titleLabel.attr('for', 'taskTitle-in');
    // titleLabel.attr('style', 'display: block;');
    // titleLabel.text('Task:');
    // let titleInput = $('<input>');
    // titleInput.attr('id', 'taskTitle-in');
    // titleInput.attr('style', 'display: block;');

    // modalForm.append(titleLabel)
    // modalForm.append(titleInput);

    // // Create and append elements in jquery for body

    // let bodyLabel = $('<label>');
    // bodyLabel.attr('for', 'taskBody-in');
    // bodyLabel.attr('style', 'display: block;');
    // bodyLabel.text('Details:');
    // let bodyInput = $('<textarea>');
    // bodyInput.attr('id', 'taskBody-in');
    // bodyInput.attr('style', 'display: block;');

    // modalForm.append(bodyLabel);
    // modalForm.append(bodyInput);

    // // Create and append elements for date picker
    

    // let dateLabel = $('<label>');
    // dateLabel.attr('for', 'datepicker');
    // dateLabel.attr('style', 'display: block;');
    // dateLabel.text('Date:');
    // let dateInput = $('<input>');
    // dateInput.attr('id', 'datepicker');
    // dateInput.attr('style', 'display: block;');

    // modalForm.append(dateLabel);
    // modalForm.append(dateInput);
    // $(function() {
    //     $('#datepicker').datepicker({
    //         changeMonth: true,
    //         changeYear: true,
    //     });
    // });
    
    // $('.modal-body').append(modalForm);

    // $('#btn-save').on('click', function (event) {
    //     console.log(event);
    //     handleAddTask(event);
    // });

    // $('#btn-close').on('click', function (event) {
    //     $('body').attr('class','');
    //     $('body').attr('style', '');
    //     $('#formModal').attr('class', 'modal');
    //     $('#formModal').attr('style', 'display: none;');
    //     $('#formModal').attr('aria-hidden', 'true');
    //     $('#formModal').removeAttr('aria-modal', '');
    //     $('#formModal').removeAttr('role', '')
    //     $('.modal-backdrop').remove();
    // })

    $('.btn-delete').on('click', function (event) {
        console.log(event);
        handleDeleteTask(event);
    });

    console.log(taskList);

});
