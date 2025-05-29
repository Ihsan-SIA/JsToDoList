function AddTask(){
    let newList = document.createElement('li');
    
    
    newList.textContent = inputContent.value;
    document.getElementById('toDoList').appendChild(newList);
}