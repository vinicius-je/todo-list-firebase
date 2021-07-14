
document.querySelector(".signInBtn").addEventListener("click", signIn);

function signIn(){
    let email = document.getElementById("email").value;
    let pwd = document.getElementById("pwd").value;

    auth.signInWithEmailAndPassword(email, pwd)
        .then(user => {
            console.log("Usuário conectado")
            window.location.href = "http://127.0.0.1:5500/todo.html";
        })
        .catch(err => { console.log(err) })
}