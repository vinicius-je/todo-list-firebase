
let allTodos = "";

addEventListener("DOMContentLoaded", getTodoList);

// add a new todo
function saveTodo(){
    let todo = document.getElementById("todo").value;

    docRef.update({
        todoList: firebase.firestore.FieldValue.arrayUnion({id: generateID(), todo, status:"undone"})
    })
}

function showTodoList(data){
    let htmlElements = ""
    for(let index in data){
        htmlElements += `<li>${data[index].todo}</li>`;
    }
    document.querySelector(".todoList").innerHTML = htmlElements;
}

// get all the todos from data base
function getTodoList(){
    docRef.get()
        .then(doc => {
            allTodos = doc.data().todoList;
            showTodoList(allTodos)
    })
}

function generateID(){
    return Math.random().toString(36).substring(2);
}

// take the task just typed 
docRef.onSnapshot(doc => {
    allTodos = doc.data().todoList;
    showTodoList(allTodos);
})
