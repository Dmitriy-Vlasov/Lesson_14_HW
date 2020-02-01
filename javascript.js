"use strict"

const addNewItemButton = document.querySelector('#addNewItemButton');
const toDoList = document.querySelector('#toDoList');

addNewItemButton.addEventListener('click', onToDoListButtonClick);
toDoList.addEventListener('click', doneToDoListItem);

function onToDoListButtonClick() {
    createNewItemToDoList();
}

function createNewItemToDoList() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => {return response.json()})
    .then(data => {addElement(data)})
};

function addElement(data) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].completed == true) {
            createDoneItem(data, i);
        } else {
            createNotDoneItem(data, i);
        }
    }; 
};

function createNotDoneItem(data, i) {
    const toDoListItem = document.createElement('li');
    toDoListItem.innerHTML = `${data[i].title}`;
    toDoList.append(toDoListItem); 
};

function createDoneItem(data, i) {
    const toDoListItem = document.createElement('li');
    toDoListItem.innerHTML = `${data[i].title}`;
    toDoList.append(toDoListItem); 
    toDoListItem.classList.add('done');
};

function doneToDoListItem(e) {
    if (e.target.tagName == 'LI') {
        e.target.classList.toggle('done');
    };
};
