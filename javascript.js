"use strict"

const addNewItemButton = document.querySelector('#addNewItemButton');
const toDoList = document.querySelector('#toDoList');

addNewItemButton.addEventListener('click', onToDoListButtonClick);
toDoList.addEventListener('click', doneToDoListItem);

function onToDoListButtonClick() {
    clear(); 
    createNewItemToDoList();
}

function createNewItemToDoList() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(addElement)
};

function addElement(data) {
    
    for (let i = 0; i < data.length; i++) {
        if (data[i].completed == true) {
            createItem(data, i);
            const toDoListAdd = createItem(data, i);
            addStatusDone(toDoListAdd);
        } else {
            createItem(data, i);
        }
    }; 
};

function createItem(data, i) {
    const toDoListItem = document.createElement('li');
    toDoListItem.innerHTML = `${data[i].title}`;
    toDoList.append(toDoListItem); 
    return toDoListItem;
};

function addStatusDone(toDoListAdd) {
    toDoListAdd.classList.add('done');
}

function doneToDoListItem(e) {
    if (e.target.tagName == 'LI') {
        e.target.classList.toggle('done');
    };
};

function clear() {
    toDoList.innerHTML = '';
}