let currentUser = ""

document.querySelector(".createAccountBtn")
.addEventListener('click', createAccount)

function createAccount(){
    let email = document.getElementById("newEmail").value;
    let pwd = document.getElementById("newPwd").value;

    auth.createUserWithEmailAndPassword(email, pwd)
        .then(user => { console.log(user )})
        .catch(err => console.log(err));

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
    .catch(err => console.log(err))
}