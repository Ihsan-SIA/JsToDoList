function AddTask(){
    let newList = document.createElement('li');
    let inputContent = document.getElementById('inputBox')
    
    newList.textContent = inputContent.value;
    document.getElementById('toDoList').appendChild(newList);
}