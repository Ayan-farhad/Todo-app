function testTodo() {
    let inp = document.getElementById('input').value;
    let gul = document.querySelector('.ul');

    if (inp !== "") {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(inp));

        let deleteButton = document.createElement('button');
        deleteButton.appendChild(document.createTextNode('Delete'));
        deleteButton.onclick = function() {
           
            gul.removeChild(li);
        };

        li.appendChild(deleteButton);
        gul.appendChild(li);

        document.getElementById('input').value = "";
    } else {
        alert("Input field can't be empty!");
    }
}
