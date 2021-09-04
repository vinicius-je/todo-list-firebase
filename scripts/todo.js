// reference to user database
let docRef;
let currentUser; 
let allTodos = "";

addEventListener("DOMContentLoaded", loadTodoList);
document.querySelector('.addBtn').addEventListener('click', saveTodo);

// add a new todo on database
function saveTodo(){
    let todo = document.getElementById("todo").value;
    if(todo != ''){
        docRef.update({
            todoList: firebase.firestore.FieldValue.arrayUnion({id: generateID(), todo, completed: false})
        })
        docRef.onSnapshot(doc => {
            allTodos = doc.data().todoList;
            createTodoList(allTodos);
        })
    }else{ alert("Try again") }
    document.getElementById("todo").value = '';
}

function createTodoList(data){
    let htmlElements = ""
    for(let index in data){
        htmlElements += `<div id=${data[index].id} class="task_container">
                            <span class=${data[index].completed ? "line-through" : "" }>
                                ${data[index].todo}
                            </span>
                            <div>
                                <i class="fas fa-trash" onClick="deleteTask(this)"></i>
                                <i class="fas fa-check-circle" onClick="completedTask(this)"></i>
                            </div>
                        </div>`;
    }
    document.querySelector(".todoList").innerHTML = htmlElements;
}

function completedTask(element){
    let id = element.parentElement.parentElement.id
    allTodos.forEach(task => {
        if(task.id === id){
            task.completed = !task.completed
            docRef.set({todoList: allTodos}).then(() => loadTodoList())
        }
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

function deleteTask(element){
    let id = element.parentElement.parentElement.id
    
    let new_list = [];
    docRef.get().then(doc => {
        let old_list = doc.data().todoList;
        let delete_task = false;
        old_list.forEach(task => {
            if(task.id != id){ new_list.push(task) }
            else{ delete_task = true; }
        })
        if(delete_task){ 
            docRef.set({todoList: new_list}).then(() => loadTodoList())
        }
    })
}



