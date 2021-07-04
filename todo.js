addEventListener("DOMContentLoaded", getTodoList);

let allTodos = "";

function createDataBase(){
    let data = {
        todoList: []
    }

    docRef.set(data)
        .then(docRef => {console.log(docRef)})
        .catch(err => console.log(err))
}

// add a new todo
function saveTodo(){
    let todo = document.getElementById("todo").value;

    docRef.update({
        todoList: firebase.firestore.FieldValue.arrayUnion({todo, status:"undone"})
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

// take the task just typed 
docRef.onSnapshot(doc => {
    allTodos = doc.data().todoList;
    showTodoList(allTodos);
})
