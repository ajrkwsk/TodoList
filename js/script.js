let $todoInput;
let $addBtn;
let $ulList;
let $newTask;
let $alertInfo;
let $deleteBtn;
let $height;

const main = () => {
    prepareDOMElements();
    prepereDOMEvents();
}

const prepareDOMElements = () => {
$todoInput = document.querySelector('.todoInput');
$addBtn = document.querySelector('.addBtn');
$ulList = document.querySelector('.ulList');
$alertInfo = document.querySelector('.alertInfo');
}

const prepereDOMEvents = () => {
    $addBtn.addEventListener('click', addNewTask);
    $ulList.addEventListener('click', checkClick);
}

const addNewTask = () => {
    if ($todoInput.value !== ''){
        $newTask = document.createElement('li');
        $newTask.innerText = $todoInput.value;
        $ulList.appendChild($newTask);
        $todoInput.value = '';
        changeSizeTodoList();
        createTools();
    } else {
        $alertInfo.innerText = 'Nie wpisałeś zadania.'
    }
}

const createTools = () => {
    toolPanel = document.createElement('div');
    toolPanel.classList.add('tools');
    $newTask.appendChild(toolPanel);

    $deleteBtn = document.createElement('button');
    $deleteBtn.classList.add('delete');
    $deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
    toolPanel.appendChild($deleteBtn);
}

const checkClick = e => {
    if(e.target.closest('button').className === 'delete'){
        deleteTask(e);
    }
}

const deleteTask = e => {
    const deleteTodo = e.target.closest('li');
    deleteTodo.remove();
}

function changeSizeTodoList() {
    $height += 70;
    $ulList.style.height = $height + 'px';
}

document.addEventListener('DOMContentLoaded', main);
