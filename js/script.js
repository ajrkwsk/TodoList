let $todoInput;
let $addBtn;
let $ulList;
let $newTask;
let $alertInfo;
let $deleteBtn;


$todoInput = document.querySelector('.todoInput');
$addBtn = document.querySelector('.addBtn');
$ulList = document.querySelector('.ulList');
$alertInfo = document.querySelector('.alertInfo');
$deleteBtn = document.querySelector('.delete');


const addNewTask = () => {
    if ($todoInput.value !== ''){
        $newTask = document.createElement('li');
        $newTask.innerText = $todoInput.value;
        $ulList.appendChild($newTask);
        $todoInput.value = '';
        createTools();
    } else {
        $alertInfo.innerText = 'Nie wpisałeś zadania.'
    }
}

const createTools = () => {
    toolsPanel = document.createElement('div');
    toolsPanel.classList.add('tools');
    $newTask.appendChild(toolsPanel);
    $deleteBtn = document.createElement('button');
    $deleteBtn.classList.add('delete');
    $deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
    toolsPanel.appendChild($deleteBtn);
}

const deleteTask = (e) => {
    // if(e.target.tagName === 'button' && e.target.classList.contains('.delete')){
        // e.target.parentElement.remove();
        const deletetTodo = e.target.closest('li');
        deleteTodo.remove();
    
}

$addBtn.addEventListener('click', addNewTask);
$ulList.addEventListener('click', deleteTask);