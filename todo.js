function AddTask(){
    let inputContent =document.getElementById('inputBox');
    
    let newList = document.createElement('h1');
    newList.textContent = inputContent.value;
    document.getElementById('list').appendChild(newList);
}