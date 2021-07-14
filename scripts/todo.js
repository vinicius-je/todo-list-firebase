// reference to user database

let docRef;
let currentUser; 
let allTodos = "";

addEventListener("DOMContentLoaded", loadTodoList);
document.querySelector('.addBtn').addEventListener('click', saveTodo);

// add a new todo on database
function saveTodo(){
    let todo = document.getElementById("todo").value;
    docRef.update({
        todoList: firebase.firestore.FieldValue.arrayUnion({id: generateID(), todo, status:"undone"})
    })
    docRef.onSnapshot(doc => {
        allTodos = doc.data().todoList;
        createTodoList(allTodos);
    })
    todo.value = '';
}

function createTodoList(data){
    let htmlElements = ""
    for(let index in data){
        htmlElements += `<li id=${data[index].id}>${data[index].todo} <i class="fas fa-check-circle"></i></li>`;
    }
    document.querySelector(".todoList").innerHTML = htmlElements;

    let icon = document.querySelectorAll('.fas');
    icon.forEach(element => {
        element.addEventListener('click', (e) => {
            let id = e.target.parentElement.id;
            deleteTask(id);
        })
    })
}

// get all the todos from database
function getTodoList(){
    docRef.get()
        .then(doc => {
            allTodos = doc.data().todoList;
            createTodoList(allTodos);
    })
}

// generates an id for each tasks
function generateID(){
    return Math.random().toString(36).substring(2);
}

function loadTodoList(){
    auth.onAuthStateChanged(user => {
        if(user){ currentUser = user.uid }
        docRef = db.collection(TODO).doc(currentUser);
        getTodoList();
    })
}

function deleteTask(id){
    let new_list = [];
    docRef.get().then(doc => {
        let old_list = doc.data().todoList;
        let validate = false;
        old_list.forEach(task => {
            if(task.id != id){ new_list.push(task) }
            else{ validate = true; }
        })
        if(validate){ 
            docRef.set({todoList: new_list});
            loadTodoList();
        }
    })
}



