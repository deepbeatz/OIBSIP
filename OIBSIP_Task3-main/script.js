document.addEventListener('DOMContentLoaded', function() {
    var taskInput = document.getElementById('taskInput');
    var addButton = document.getElementById('addButton');
    var taskList = document.getElementById('taskList');

    addButton.addEventListener('click', function() {
        var taskText = taskInput.value.trim();

        if (taskText !== '') {
            var taskItem = createTaskElement(taskText);
            taskList.appendChild(taskItem);
            taskInput.value = '';
        }
        else{
            alert("Please Write A Task To Add It !!!");
        }
        saveData();
    });

    taskList.addEventListener('click', function(event) {
        var target = event.target;

        if (target.classList.contains('deleteButton')) {
            var taskItem = target.parentNode;
            taskList.removeChild(taskItem);
        }
        saveData();
    });

    function createTaskElement(taskText) {
        var taskItem = document.createElement('li');
        taskItem.className = 'taskItem';

        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        var taskTextSpan = document.createElement('span');
        taskTextSpan.className = 'taskText';
        taskTextSpan.textContent = taskText;

        var deleteButton = document.createElement('button');
        deleteButton.className = 'deleteButton';
        deleteButton.textContent = 'Delete';

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskTextSpan);
        taskItem.appendChild(deleteButton);

        return taskItem;
    }
});