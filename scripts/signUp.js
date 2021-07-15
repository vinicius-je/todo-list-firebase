document.querySelector(".signUpBtn").addEventListener('click', createAccount)

function createAccount(){
    let email = document.getElementById("newEmail").value;
    let pwd = document.getElementById("newPwd").value;

    auth.createUserWithEmailAndPassword(email, pwd)
        .then(user => { console.log(user )})
        .catch(err => alert("missing email or password"));

    auth.onAuthStateChanged((user) => {
        if(user){
            createDataBase(user.uid);
        }
    })        
}

function createDataBase(uid){
    let data = {
        todoList: []
    }

    db.collection(TODO).doc(uid).set(data)
    .then(data => {console.log("Banco de dados criado")})
    .then(()=> window.location.href = "https://vinicius-je.github.io/todo-list-firebase/todo.html")
    .catch(err => console.log(err))
}