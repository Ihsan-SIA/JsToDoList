function AddTask(){
    let newList = document.createElement('li');
    let task = document.getElementById('inputBox');
    newList.innerText = task.value;
    document.getElementById('toDoList').appendChild(newList);
}