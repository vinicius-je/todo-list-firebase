
function signOut(){
    auth.signOut().then(() => {
        // console.log("Você foi desconectado")
        window.location.href = "http://127.0.0.1:5500/todo.html";
    })
    .catch(err => console.log(err))
}