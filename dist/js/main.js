
const input = document.getElementById('input');
const listContainer = document.getElementById('list-container');


const button = document.getElementById('button').addEventListener('click', function() {
    if(input.value === "") {
        alert("Please add some task");
    }
    else {
        const li = document.createElement('li');
        li.innerText = input.value;
        listContainer.appendChild(li); 
    }
    input.value = '';
})