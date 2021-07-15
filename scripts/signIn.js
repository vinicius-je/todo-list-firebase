
document.querySelector(".signInBtn").addEventListener("click", signIn);

function signIn(){
    let email = document.getElementById("email").value;
    let pwd = document.getElementById("pwd").value;

    auth.signInWithEmailAndPassword(email, pwd)
        .then(user => {
            console.log("Usuário conectado")
            window.location.href = "https://vinicius-je.github.io/todo-list-firebase/todo.html";
        })
        .catch(err => { alert("missing email or password") })
}