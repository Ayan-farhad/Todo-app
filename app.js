let getul = document.getElementById("ul");
function funcTodo(){
    let inp = document.getElementById("input")
    let li = document.createElement("li");
    
    let liText = document.createTextNode(inp.value)
    li.appendChild(liText)
    getul.appendChild(li)
 
    inp.value= ""
    if(inp.value==""){
        alert("Please enter a task")
    }
    let deletebtn = document.createElement("button")
    let deletebtntext = document.createTextNode("Delete")
    deletebtn.appendChild(deletebtntext)
    li.appendChild(deletebtn)
    deletebtn.setAttribute("onclick","dbtn(this)")

    let editbtn = document.createElement("button")
    let editext = document.createTextNode("Edit")
    editbtn.appendChild(editext)
    li.appendChild(editbtn)
    editbtn.setAttribute("onclick","editbtn(this)")
}

function DeleteAll(e){
    getul.innerHTML = ''
}

function dbtn(e){
    e.parentNode.remove()
}

function editbtn(e){
    let pro = prompt("Update",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = pro
}