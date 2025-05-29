function AddTask(){
    let inputContent =document.getElementById('inputBox');
    
    let newList = document.createElement('li');
    newList.textContent = inputContent.value;
    document.getElementById('list').appendChild(newList);
}