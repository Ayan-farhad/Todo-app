let iNp = document.getElementById("input");
let array = [];

function displayTasks() {
    let setul = document.getElementById("ul");
    setul.innerHTML = "";

    for (let i = 0; i < array.length; i++) {
        let getLi = document.createElement("li");
        getLi.innerHTML = array[i] + " <button onclick='editLi(" + i + ")' >Edit</button> <button  onclick='deleteLi(" + i + ")' >Delete</button>";
        setul.appendChild(getLi);
    }
}

function funcTodo() {
    let inpV = iNp.value;
    if(inpV===""){
        alert("Please enter a task!")
    } 

    iNp.value = "";

    array.push(inpV);

    displayTasks()
}

function deleteLi(index) {
    array.splice(index, 1);
    displayTasks();
}

function editLi(index) {
    let editedTask = prompt("Edit task:", array[index]);
    if (editedTask !== null) {
        array[index] = editedTask;
        displayTasks();
    }
}