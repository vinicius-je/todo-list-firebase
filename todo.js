// reference to user database

let docRef;
let currentUser; 
let allTodos = "";

addEventListener("DOMContentLoaded", () => {
    auth.onAuthStateChanged(user => {
        if(user){ currentUser = user.uid }
        docRef = db.collection(TODO).doc(currentUser);
        getTodoList();
        busca();
    })
})

// add a new todo on database
function saveTodo(){
    console.log("teste")
    let todo = document.getElementById("todo").value;

    docRef.update({
        todoList: firebase.firestore.FieldValue.arrayUnion({id: generateID(), todo, status:"undone"})
    })

    docRef.onSnapshot(doc => {
        allTodos = doc.data().todoList;
        showTodoList(allTodos);
    })
}

function showTodoList(data){
    let htmlElements = ""
    for(let index in data){
        htmlElements += `<li>${data[index].todo}</li>`;
    }
    document.querySelector(".todoList").innerHTML = htmlElements;
}

// get all the todos from database
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

function busca(){
    docRef.get()
    .then(doc => {
        console.log(doc.data());
    })
}


