const tableBTN = document.getElementById("tableBTN");
const todoListBTN = document.getElementById("todoListBTN");
const mindBTN = document.getElementById("mindBTN");

const table = document.getElementById("table");
const todolist = document.getElementById("todoList");
const mind = document.getElementById("mind");

let tableHandler = 0;
let toDoListHandler = 0;
let mindHandler = 0;

function handleTable(){
    if(tableHandler == 0){
        table.classList.remove("hide");
        tableHandler++;
        return;
    }
    if(tableHandler == 1){
        table.classList.add("hide");
        tableHandler--;
        return;
    }
}

function handleToDoList(){
    if(toDoListHandler == 0){
        todolist.classList.remove("hide");
        toDoListHandler++;
        return;
    }
    if(toDoListHandler == 1){
        todolist.classList.add("hide");
        toDoListHandler--;
        return;
    }
}

function handleMind(){
    if(mindHandler == 0){
        mind.classList.remove("hide");
        mindHandler++;
        return;
    }
    if(mindHandler == 1){
        mind.classList.add("hide");
        mindHandler--;
        return;
    }
}

tableBTN.addEventListener("click",handleTable);
todoListBTN.addEventListener("click",handleToDoList);
mindBTN.addEventListener("click",handleMind);